
const fs = require('fs');
const path = require('path');

const excludeFiles = ['index.html', 'ai_projects.html', 'about.html'];
const directoryPath = '.';

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // 1. Update ABOUT link
    // Regex to match the specific Google Doc link pattern widely used
    // It usually looks like: <a ... href="...google..." ... >ABOUT</a>
    const aboutRegex = /<a[^>]*href="[^"]*google\.com[^"]*"[^>]*>\s*ABOUT\s*<\/a>/gi;

    if (aboutRegex.test(content)) {
        content = content.replace(aboutRegex, '<a class="header-gnblink" href="./about.html">ABOUT</a>');
        updated = true;
        console.log(`Updated ABOUT link in ${filePath}`);
    } else {
        // Fallback for cases where it might be slightly different or already updated but we want to be sure
        // If it contains "ABOUT" but not "about.html", warn or try generic replace?
        // Let's stick to the google doc pattern to be safe, or just looking for the text ABOUT
        if (content.includes('>ABOUT</a>') && !content.includes('href="./about.html"')) {
            console.log(`Potential missed ABOUT link in ${filePath}`);
        }
    }

    // 2. Add PROJECT WITH AI link
    if (!content.includes('PROJECT WITH AI')) {
        if (content.includes('PROJECT BY AI')) {
            content = content.replace(/PROJECT BY AI/g, 'PROJECT WITH AI');
            updated = true;
            console.log(`Renamed PROJECT BY AI in ${filePath}`);
        } else {
            // Need to insert it
            // Look for the PROJECTS list item. The pattern seems to vary slightly but usually includes PROJECTS
            // Pattern: <li ...> <a ...> ... PROJECTS ... </a> </li>
            const projectsRegex = /(<li[^>]*>\s*<a[^>]*href=[^>]*>.*?PROJECTS.*?<\/a>\s*<\/li>)/i;

            if (projectsRegex.test(content)) {
                const match = content.match(projectsRegex);
                if (match) {
                    const projectsItem = match[1];
                    // Insert new item after it
                    const newItem = `\n                        <li class="header-gnbitem">\n                            <a class="header-gnblink" href="./ai_projects.html">PROJECT WITH AI</a>\n                        </li>`;

                    content = content.replace(projectsItem, projectsItem + newItem);
                    updated = true;
                    console.log(`Added PROJECT WITH AI to ${filePath}`);
                }
            }
        }
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
