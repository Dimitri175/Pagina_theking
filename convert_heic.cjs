const fs = require('fs');
const heicConvert = require('heic-convert');

(async () => {
    try {
        const inputBuffer = fs.readFileSync('public/image main/fondo/01/Fondo01.HEIC');
        const outputBuffer = await heicConvert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 0.9
        });

        fs.writeFileSync('public/image main/fondo/01/Fondo01.jpg', outputBuffer);
        console.log('Conversion successful: public/image main/fondo/01/Fondo01.jpg');
    } catch (error) {
        console.error('Error during conversion:', error);
        process.exit(1);
    }
})();
