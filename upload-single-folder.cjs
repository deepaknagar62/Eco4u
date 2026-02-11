const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.VITE_CLOUDINARY_API_KEY,
  api_secret: process.env.VITE_CLOUDINARY_API_SECRET
});

// Upload a single image
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
    return { success: true };
  } catch (error) {
    console.error(`  ✗ ${path.basename(filePath)} - ${error.message}`);
    return { success: false };
  }
}

// Upload specific folder
async function uploadFolder(folderPath, cloudinaryFolder) {
  console.log(`\n📁 Uploading folder: ${cloudinaryFolder}\n`);
  
  const files = fs.readdirSync(folderPath);
  let success = 0;
  let failed = 0;
  
  for (const file of files) {
    const fullPath = path.join(folderPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile() && /\.(png|jpg|jpeg|gif|webp|svg|ico|avif)$/i.test(file)) {
      const result = await uploadImage(fullPath, cloudinaryFolder);
      if (result.success) {
        success++;
      } else {
        failed++;
      }
    }
  }
  
  return { success, failed };
}

// Main
async function main() {
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   Upload Single Folder to Cloudinary                   ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');
  
  const folderName = 'COTTON EAR BUDS - SQUARE BOX';
  const folderPath = path.join(__dirname, 'public', folderName);
  
  if (!fs.existsSync(folderPath)) {
    console.error(`❌ Folder not found: ${folderPath}`);
    process.exit(1);
  }
  
  const startTime = Date.now();
  const stats = await uploadFolder(folderPath, folderName);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║                   Upload Summary                       ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(`\n  ✓ Successful:     ${stats.success}`);
  console.log(`  ✗ Failed:         ${stats.failed}`);
  console.log(`  ⏱ Duration:       ${duration}s\n`);
  
  if (stats.failed === 0) {
    console.log('🎉 All images uploaded successfully!\n');
  }
}

main().catch(console.error);
