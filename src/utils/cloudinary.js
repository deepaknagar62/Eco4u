/**
 * Cloudinary Image Utility
 * Handles image URL generation with automatic optimization and transformations
 */

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

/**
 * Generate Cloudinary URL with transformations
 * @param {string} path - Image path (e.g., '/Compostable Garbage Bags/1.png')
 * @param {object} options - Transformation options
 * @param {number} options.width - Image width
 * @param {number} options.height - Image height
 * @param {number} options.quality - Image quality (1-100)
 * @param {string} options.format - Image format (jpg, png, webp, auto)
 * @param {string} options.crop - Crop mode (fill, fit, scale, etc.)
 * @returns {string} - Full Cloudinary URL
 */
export function getCloudinaryUrl(path, options = {}) {
  // Remove leading slash and convert to Cloudinary path
  const cleanPath = path.replace(/^\//, '');
  const cloudinaryPath = `eco4u/${cleanPath}`;
  
  // Build transformation string
  const transformations = [];
  
  // Size transformations
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);
  
  // Quality transformation
  if (options.quality) {
    transformations.push(`q_${options.quality}`);
  } else {
    transformations.push('q_auto'); // Automatic quality optimization
  }
  
  // Format transformation
  if (options.format) {
    transformations.push(`f_${options.format}`);
  } else {
    transformations.push('f_auto'); // Automatic format selection (WebP, AVIF)
  }
  
  // Additional optimizations
  if (options.dpr) transformations.push(`dpr_${options.dpr}`); // Device pixel ratio
  if (options.gravity) transformations.push(`g_${options.gravity}`); // Gravity for cropping
  
  const transformString = transformations.join(',');
  
  return `${CLOUDINARY_BASE_URL}/${transformString}/${cloudinaryPath}`;
}

/**
 * Get image URL with fallback to local images
 * @param {string} path - Image path
 * @param {object} options - Transformation options
 * @returns {string} - Cloudinary URL or local path
 */
export function getImageUrl(path, options = {}) {
  // If Cloudinary is not configured, use local images
  if (!CLOUDINARY_CLOUD_NAME || CLOUDINARY_CLOUD_NAME === 'your_cloud_name_here') {
    return path; // Fallback to local images
  }
  
  return getCloudinaryUrl(path, options);
}

/**
 * Preset configurations for common use cases
 */
export const ImagePresets = {
  // Product thumbnail in grid
  thumbnail: {
    width: 400,
    height: 400,
    crop: 'fill',
    quality: 80
  },
  
  // Product detail main image
  detail: {
    width: 800,
    quality: 90
  },
  
  // Product detail gallery
  gallery: {
    width: 600,
    quality: 85
  },
  
  // Hero banner desktop
  heroBannerDesktop: {
    width: 1920,
    quality: 85
  },
  
  // Hero banner mobile
  heroBannerMobile: {
    width: 768,
    quality: 80
  },
  
  // Category icon
  categoryIcon: {
    width: 200,
    height: 200,
    crop: 'fit',
    quality: 90
  },
  
  // Logo
  logo: {
    width: 300,
    quality: 90
  }
};

/**
 * Get image URL with preset
 * @param {string} path - Image path
 * @param {string} presetName - Preset name from ImagePresets
 * @returns {string} - Cloudinary URL
 */
export function getImageUrlWithPreset(path, presetName) {
  const preset = ImagePresets[presetName];
  if (!preset) {
    console.warn(`Preset "${presetName}" not found. Using default.`);
    return getImageUrl(path);
  }
  return getImageUrl(path, preset);
}

/**
 * Generate responsive srcset for images
 * @param {string} path - Image path
 * @param {array} widths - Array of widths for srcset
 * @returns {string} - srcset string
 */
export function getResponsiveSrcSet(path, widths = [400, 800, 1200, 1600]) {
  if (!CLOUDINARY_CLOUD_NAME || CLOUDINARY_CLOUD_NAME === 'your_cloud_name_here') {
    return ''; // No srcset for local images
  }
  
  return widths
    .map(width => `${getImageUrl(path, { width })} ${width}w`)
    .join(', ');
}
