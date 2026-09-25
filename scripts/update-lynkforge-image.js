const fs = require('fs');
const path = require('path');

const src = '/Users/prakhar/.gemini/antigravity-ide/brain/6973d07c-dea0-4fd3-90b5-594a0309af6f/lynkforge_landing_1781093657219.png';
const dest = path.join(__dirname, '../public/images/lynkforge_v3.png');

try {
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log('Successfully updated Lynkforge UI preview image to /images/lynkforge_v3.png');
    } else {
        console.error('Source screenshot file not found. Please run the npx capture-website-cli command directly.');
    }
} catch (error) {
    console.error('Failed to copy screenshot:', error.message);
}
