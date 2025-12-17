
const fs = require('fs');
const path = require('path');

const excludeFiles = ['index.html', 'ai_projects.html', 'about.html'];
const directoryPath = './';

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // 1. Update ABOUT link
    // Regex to match the specific Google Doc link pattern or similar structure
    const aboutRegex = /<a[^>]*href="[^"]*google\.com[^"]*"[^>]*>\s*ABOUT\s*<\/a>/gi;
    const aboutSimpleRegex = /<a[^>]*href="[^"]*"[^>]*>\s*ABOUT\s*<\/a>/gi; // More generic if specific one fails

    // Check if it already has the correct link
    if (!content.includes('href="./about.html"')) {
        if (aboutRegex.test(content)) {
            content = content.replace(aboutRegex, '<a class="header-gnblink" href="./about.html">ABOUT</a>');
            updated = true;
            console.log(`Updated ABOUT link in ${filePath}`);
        } else if (content.match(aboutSimpleRegex)) {
            // Fallback: Check if it's not already about.html
            content = content.replace(aboutSimpleRegex, (match) => {
                if (match.includes('about.html')) return match;
                return '<a class="header-gnblink" href="./about.html">ABOUT</a>';
            });
            updated = true;
            console.log(`Updated ABOUT link (generic) in ${filePath}`);
        }
    }

    // 2. Add PROJECT WITH AI link
    if (!content.includes('PROJECT WITH AI')) {
        if (content.includes('PROJECT BY AI')) {
            content = content.replace(/PROJECT BY AI/g, 'PROJECT WITH AI');
            updated = true;
            console.log(`Renamed PROJECT BY AI in ${filePath}`);
        } else {
            // Insert it
            // Look for the PROJECTS list item
            const projectsRegex = /(<li[^>]*>\s*<a[^>]*href=[^>]*>.*?PROJECTS.*?<\/a>\s*<\/li>)/i;
            if (projectsRegex.test(content)) {
                const match = content.match(projectsRegex);
                if (match) {
                    const projectsItem = match[1];
                    // Extract class from the li if possible to match style, though we'll default to a clean one or copy
                    const newItem = `\n                    <li class="header-gnbitem">\n                        <a class="header-gnblink" href="./ai_projects.html">PROJECT WITH AI</a>\n                    </li>`;
                    // Note: using class="header-gnbitem" because most subpages seem to use it based on previous view_files
                    // But we should check. Let's try to infer from the match if it has a class.

                    let liClass = "header-gnbitem"; // default for pages
                    if (projectsItem.includes('class="')) {
                        // rudimentary extraction
                    }

                    // Just inserting it
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
