import RNFetchBlob from 'rn-fetch-blob';

class ImageTools {

    base64toBlobTESTE(base64Data, contentType = '', sliceSize = 512) {

        if (!base64Data) {
            return
        }

        base64Data = base64Data.split(",")[1]
        const byteCharacters = atob(base64Data);
        // byteCharacters = decode(base64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;

    }

    async base64toBlob(base64Data, contentType = '', sliceSize = 512) {
        const response = await RNFetchBlob.config({
            fileCache: true
        }).fetch('GET', `data:image/${contentType};base64,${base64Data}`);
    
        const blob = response.blob(contentType);
        return blob;
    }

    getExtensionFile(mimeType) {

        let extension = null
    
        switch (mimeType) {
            case "image/png":
                extension = "png"
                break
            case "image/jpeg":
                extension = "jpg"
                break
            default:
                extension = null
                break
        }
    
        return extension
    }

}

export default ImageTools