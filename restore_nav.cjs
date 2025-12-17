
const fs = require('fs');
const path = require('path');

const excludeFiles = ['index.html', 'ai_projects.html', 'about.html'];
const directoryPath = '.';

// The navigation block to insert
const navBlock = `
                    <li class="header-gnbitem">
                        <a class="header-gnblink" href="./about.html">ABOUT</a>
                    </li>
                    <li class="header-gnbitem">
                        <a class="header-gnblink" href="./index.html#PkM75YP0Bf">PROJECTS</a>
                    </li>
                    <li class="header-gnbitem">
                        <a class="header-gnblink" href="./ai_projects.html">PROJECT WITH AI</a>
                    </li>`;

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Pattern to find the hidden menu comments or empty list
    // We previously replaced it with: <ul class="header-gnblist">\n <!-- Menu hidden ... -->\n </ul>
    // We should match inside <ul class="header-gnblist"> ... </ul>

    const listRegex = /(<ul[^>]*class="header-gnblist"[^>]*>)([\s\S]*?)(<\/ul>)/i;

    if (listRegex.test(content)) {
        // We replace the inner content with our navBlock
        content = content.replace(listRegex, `$1${navBlock}\n                $3`);
        updated = true;
        console.log(`Restored navigation in ${filePath}`);
    } else {
        console.log(`Could not find header-gnblist in ${filePath}`);
    }

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach((file) => {
        if (path.extname(file) === '.html' && !excludeFiles.includes(file)) {
            updateFile(file);
        }
    });
});
