/**
 * Script to update image paths in products.js to use Cloudinary helper
 * This is a one-time migration script
 */

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, 'src/data/products.js');

// Read the file
let content = fs.readFileSync(productsFilePath, 'utf8');

// Add import at the top if not already present
if (!content.includes('import { getImageUrl }')) {
  content = `import { getImageUrl } from '../utils/cloudinary';\n\n${content}`;
}

// Replace all image path patterns with getImageUrl wrapper
// Pattern 1: image: '/path/to/image.png'
content = content.replace(
  /image:\s*'(\/[^']+\.(?:png|jpg|jpeg|gif|webp|svg))'/g,
  "image: getImageUrl('$1')"
);

// Pattern 2: '/path/to/image.png' in arrays (detailImages)
content = content.replace(
  /(\s+)'(\/[^']+\.(?:png|jpg|jpeg|gif|webp|svg))'/g,
  "$1getImageUrl('$2')"
);

// Write back to file
fs.writeFileSync(productsFilePath, content, 'utf8');

console.log('✓ Successfully updated src/data/products.js');
console.log('  - Added import statement for getImageUrl');
console.log('  - Wrapped all image paths with getImageUrl()');
console.log('\nNext: Update src/components/HeroSlider.jsx manually or review the changes.');
