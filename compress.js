import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');

const compressImages = async () => {
  try {
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      if (file.endsWith('.png')) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
        
        console.log(`Compressing and converting: ${file} -> ${file.replace('.png', '.webp')}`);
        
        await sharp(inputPath)
          .webp({ quality: 75 }) // 75-80 is optimal for size vs quality
          .toFile(outputPath);
          
        // Safely remove the original PNG file
        fs.unlinkSync(inputPath);
      }
    }
    console.log('Image compression and conversion complete!');
  } catch (error) {
    console.error('Error during image processing:', error);
  }
};

compressImages();
