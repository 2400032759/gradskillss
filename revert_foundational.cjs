const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src/pages/FoundationalProgram.tsx');

let content = fs.readFileSync(targetPath, 'utf-8');

// The file was transformed to use blue colors, we need to revert it back to purple.
// But we only want to revert the classes that we changed.

// Let's do a safe string replace for all UI components below the Hero (lines after line 150)
const heroSectionEndIndex = content.indexOf('Is this program for you?');

if (heroSectionEndIndex !== -1) {
    let lowerContent = content.substring(heroSectionEndIndex);
    let upperContent = content.substring(0, heroSectionEndIndex);

    // Revert blue to purple in the lower section
    lowerContent = lowerContent.replace(/blue-50/g, 'purple-50');
    lowerContent = lowerContent.replace(/blue-100/g, 'purple-100');
    lowerContent = lowerContent.replace(/blue-200/g, 'purple-200');
    lowerContent = lowerContent.replace(/blue-300/g, 'purple-300');
    lowerContent = lowerContent.replace(/blue-500/g, 'purple-500');
    lowerContent = lowerContent.replace(/blue-800/g, 'purple-600'); // Previous mapping
    lowerContent = lowerContent.replace(/blue-900/g, 'purple-700'); // Previous mapping

    content = upperContent + lowerContent;

    fs.writeFileSync(targetPath, content);
    console.log('Successfully reverted FoundationalProgram rest-of-page colors to purple.');
} else {
    console.log('Could not find split point.');
}
