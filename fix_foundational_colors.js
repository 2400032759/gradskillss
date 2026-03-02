const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src/pages/FoundationalProgram.tsx');

let content = fs.readFileSync(targetPath, 'utf-8');

// Align with global blue theme
content = content.replace(/purple-50\b/g, 'blue-50');
content = content.replace(/purple-100\b/g, 'blue-100');
content = content.replace(/purple-200\b/g, 'blue-200');
content = content.replace(/purple-300\b/g, 'blue-300');
content = content.replace(/purple-500\b/g, 'blue-500');
content = content.replace(/purple-600\b/g, 'blue-800'); // Homepage uses blue-800 for buttons and accents
content = content.replace(/purple-700\b/g, 'blue-900'); // For darker hover states
content = content.replace(/purple-900\b/g, 'blue-900'); // For text accents

// Specific gradient overwrite
content = content.replace(/from-purple-700 to-purple-500/g, 'from-blue-800 to-blue-600');
content = content.replace(/from-purple-100 to-indigo-50/g, 'from-blue-100 to-blue-50');

fs.writeFileSync(targetPath, content);
console.log('Successfully updated FoundationalProgram layout colors.');
