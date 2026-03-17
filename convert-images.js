<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import heicConvert from 'heic-convert';

const baseDirectory = './public/images';

async function convertHeicInFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const fullPath = path.join(folderPath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            await convertHeicInFolder(fullPath);
        } else if (path.extname(file).toLowerCase() === '.heic') {

            const inputBuffer = fs.readFileSync(fullPath);

            try {
                const outputBuffer = await heicConvert({
                    buffer: inputBuffer,
                    format: 'JPEG',
                    quality: 0.8
                });

                const newFileName = file.replace(/\.heic$/i, '.jpg');
                fs.writeFileSync(path.join(folderPath, newFileName), outputBuffer);

                console.log(`✅ Converted: ${file}`);
            } catch (e) {
                console.error(`❌ Error converting ${file}:`, e);
            }
        }
    }
}

convertHeicInFolder(baseDirectory)
    .then(() => console.log('🔥 Conversion complete in all folders!'));


=======
import fs from 'fs';
import path from 'path';
import heicConvert from 'heic-convert';

const baseDirectory = './public/images';

async function convertHeicInFolder(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        const fullPath = path.join(folderPath, file);

        if (fs.statSync(fullPath).isDirectory()) {
            await convertHeicInFolder(fullPath);
        } else if (path.extname(file).toLowerCase() === '.heic') {

            const inputBuffer = fs.readFileSync(fullPath);

            try {
                const outputBuffer = await heicConvert({
                    buffer: inputBuffer,
                    format: 'JPEG',
                    quality: 0.8
                });

                const newFileName = file.replace(/\.heic$/i, '.jpg');
                fs.writeFileSync(path.join(folderPath, newFileName), outputBuffer);

                console.log(`✅ Converted: ${file}`);
            } catch (e) {
                console.error(`❌ Error converting ${file}:`, e);
            }
        }
    }
}

convertHeicInFolder(baseDirectory)
    .then(() => console.log('🔥 Conversion complete in all folders!'));


>>>>>>> 9bd57d135e5007d9628d436164bc88f0c662a265
