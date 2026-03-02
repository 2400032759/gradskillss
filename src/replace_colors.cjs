const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/VISHWAS/Downloads/gradskills-launchpad-main/gradskills-launchpad-main/src';
const componentsDir = path.join(srcDir, 'components');
const pagesDir = path.join(srcDir, 'pages');

const mapping1 = [
    { from: /blue-400/g, to: 'indigo-400' },
    { from: /blue-500/g, to: 'indigo-500' },
    { from: /blue-600/g, to: 'indigo-600' },
    { from: /emerald-400/g, to: 'blue-400' },
    { from: /emerald-500/g, to: 'blue-500' },
    { from: /emerald-600/g, to: 'blue-600' },
    { from: /52,211,153/g, to: '96,165,250' } // emerald RGB -> blue-400 RGB
];

const mapping = [
    // Backgrounds (Navy / Dark Blue)
    { from: /bg-\[#050505\]/g, to: 'bg-[#0B0F19]' },
    { from: /bg-\[#030303\]/g, to: 'bg-[#0B0F19]' },
    { from: /bg-\[#0A0A0A\]/g, to: 'bg-[#131B2F]' },
    { from: /bg-\[#0c0f14\]/g, to: 'bg-[#131B2F]' },
    { from: /bg-\[#0F0F0F\]/g, to: 'bg-[#131B2F]' },
    { from: /bg-\[#111\]/g, to: 'bg-[#1E293B]' },

    // Pure black to very dark navy
    { from: /bg-black/g, to: 'bg-[#070B14]' },

    // Soft white headings
    { from: /text-white/g, to: 'text-slate-50' },

    // Electric Blue replacements (from cyan)
    { from: /cyan-400/g, to: 'blue-500' },
    { from: /cyan-500/g, to: 'blue-600' },
    { from: /cyan-600/g, to: 'blue-700' },

    // Hex colors for drop shadows
    { from: /#22d3ee/g, to: '#3b82f6' }, // cyan-400 to blue-500
    { from: /34,211,238/g, to: '59,130,246' }, // cyan-400 rgb
    { from: /6,182,212/g, to: '37,99,235' }, // cyan-500 rgb
];

function processFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.css')) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    mapping1.forEach(m => { content = content.replace(m.from, m.to); });
    mapping.forEach(m => { content = content.replace(m.from, m.to); });

    fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            processFile(fullPath);
        }
    });
}

walkDir(componentsDir);
walkDir(pagesDir);
processFile(path.join(srcDir, 'index.css'));

console.log('Colors replaced successfully!');
