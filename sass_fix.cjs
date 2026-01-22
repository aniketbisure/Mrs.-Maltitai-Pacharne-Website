const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/assets/scss');
const files = fs.readdirSync(dir);

const commonUses = '@use "variables" as *;\n@use "mixins" as *;\n';

files.forEach(file => {
    if (file.endsWith('.scss')) {
        // Exclude the files that shouldn't define dependencies on themselves or each other cyclically in a simple way
        if (file === 'main.scss' || file === '_variables.scss' || file === '_mixins.scss') {
            console.log(`Skipping ${file}`);
            return;
        }

        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if already has use (to avoid double adding if run twice)
        if (!content.includes('@use "variables"')) {
             console.log(`Updating ${file}...`);
             content = commonUses + content;
             fs.writeFileSync(filePath, content);
        } else {
             console.log(`Already updated ${file}`);
        }
    }
});
