import CryptoJS from 'crypto-js';

const III = '#hg08gos$';

export const encryptText = (text: string): string => {
    const encryptedText = CryptoJS.AES.encrypt(text, III).toString();
    return encryptedText;
};

export const decryptText = (encryptedText: string): string => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedText, III);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    } catch (error) {
        return '';
    }
};
