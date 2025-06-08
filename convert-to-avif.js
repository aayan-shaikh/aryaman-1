const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Configuration
const sourceDir = path.join(__dirname, 'src', 'assets', 'images');
const outputDir = path.join(__dirname, 'src', 'assets', 'images-avif');

// Supported input formats
const supportedExtensions = ['.jpg', '.jpeg', '.png'];

// Ensure output directory exists
async function ensureDir(dirPath) {
    try {
        await fs.mkdir(dirPath, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

// Convert a single image to AVIF
async function convertToAvif(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .avif({ quality: 80 }) // Adjust quality (0-100, default 50)
            .toFile(outputPath);
        console.log(`Converted: ${inputPath} -> ${outputPath}`);
    } catch (err) {
        console.error(`Error converting ${inputPath}:`, err.message);
    }
}

// Recursively process directory
async function processDirectory(inputDir, relativePath = '') {
    try {
        const outputSubDir = path.join(outputDir, relativePath);
        await ensureDir(outputSubDir);

        const entries = await fs.readdir(inputDir, { withFileTypes: true });

        for (const entry of entries) {
            const inputPath = path.join(inputDir, entry.name);
            const relativeEntryPath = path.join(relativePath, entry.name);

            if (entry.isDirectory()) {
                // Recursively process subdirectories
                await processDirectory(inputPath, relativeEntryPath);
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();
                if (supportedExtensions.includes(ext)) {
                    const outputFileName = path.basename(entry.name, ext) + '.avif';
                    const outputPath = path.join(outputDir, relativePath, outputFileName);
                    await convertToAvif(inputPath, outputPath);
                }
            }
        }
    } catch (err) {
        console.error(`Error processing directory ${inputDir}:`, err.message);
    }
}

// Main function
async function main() {
    try {
        console.log(`Starting conversion from ${sourceDir} to ${outputDir}`);
        await ensureDir(outputDir);
        await processDirectory(sourceDir);
        console.log('Conversion completed.');
    } catch (err) {
        console.error('Error in conversion process:', err.message);
    }
}

main();