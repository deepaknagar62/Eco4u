const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET
});

// Validate configuration
function validateConfig() {
  const { cloud_name, api_key, api_secret } = cloudinary.config();
  
  if (!cloud_name || !api_key || !api_secret) {
    console.error('❌ Error: Cloudinary credentials are missing!');
    console.error('Please update your .env file with:');
    console.error('  VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name');
    console.error('  VITE_CLOUDINARY_API_KEY=your_api_key');
    console.error('  VITE_CLOUDINARY_API_SECRET=your_api_secret');
    process.exit(1);
  }
  
  console.log(`✓ Cloudinary configured for: ${cloud_name}\n`);
}

// Upload a single image to Cloudinary
async function uploadImage(filePath, folder) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `eco4u/${folder}`,
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      resource_type: 'auto'
    });
    
    console.log(`  ✓ ${path.basename(filePath)}`);
    return {
      success: true,
      url: result.secure_url,
      path: filePath
    };
  } catch (error) {
    console.error(`  ✗ ${path.basename(filePath)} - ${error.message}`);
    return {
      success: false,
      error: error.message,
      path: filePath
    };
  }
}

// Recursively upload all images from a directory
async function uploadDirectory(dirPath, baseFolder = '', stats = { total: 0, success: 0, failed: 0 }) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-image directories
      if (item === 'node_modules' || item === '.git' || item === 'dist') {
        continue;
      }
      
      const folderName = baseFolder ? `${baseFolder}/${item}` : item;
      console.log(`\n📁 Uploading folder: ${folderName}`);
      
      // Recursively upload subdirectory
      await uploadDirectory(fullPath, folderName, stats);
    } else if (stat.isFile() && /\.(png|jpg|jpeg|gif|webp|svg|ico|avif)$/i.test(item)) {
      // Upload image file
      stats.total++;
      const result = await uploadImage(fullPath, baseFolder);
      
      if (result.success) {
        stats.success++;
      } else {
        stats.failed++;
      }
    }
  }
  
  return stats;
}

// Main execution function
async function main() {
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   ECO4U - Cloudinary Image Upload Script              ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');
  
  // Validate configuration
  validateConfig();
  
  console.log('Starting image upload process...\n');
  console.log('This may take several minutes depending on the number of images.\n');
  
  const startTime = Date.now();
  const publicDir = path.join(__dirname, 'public');
  
  // Check if public directory exists
  if (!fs.existsSync(publicDir)) {
    console.error('❌ Error: public directory not found!');
    process.exit(1);
  }
  
  // Upload all images
  const stats = await uploadDirectory(publicDir);
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  // Display summary
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║                   Upload Summary                       ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(`\n  Total Images:     ${stats.total}`);
  console.log(`  ✓ Successful:     ${stats.success}`);
  console.log(`  ✗ Failed:         ${stats.failed}`);
  console.log(`  ⏱ Duration:       ${duration}s\n`);
  
  if (stats.failed > 0) {
    console.log('⚠️  Some images failed to upload. Check the errors above.');
  } else {
    console.log('🎉 All images uploaded successfully!');
  }
  
  console.log('\n📝 Next Steps:');
  console.log('  1. Verify images in your Cloudinary dashboard');
  console.log('  2. Update your .env file with VITE_CLOUDINARY_CLOUD_NAME');
  console.log('  3. Run: npm run dev');
  console.log('  4. Test that images load from Cloudinary\n');
}

// Run the script
main().catch((error) => {
  console.error('\n❌ Fatal Error:', error.message);
  process.exit(1);
});
