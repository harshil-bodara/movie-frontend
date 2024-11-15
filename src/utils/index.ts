export const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
};

export const isFileSizeValid = (file: File, maxSizeKB: number, minSizeKB: number): boolean => {
    const fileSizeKB = file.size / 1024;
    console.log("File size in KB:", fileSizeKB);

    if (fileSizeKB < minSizeKB) {
        console.log(`File size is too small. Minimum required: ${minSizeKB} KB`);
        return false;
    }
    if (fileSizeKB > maxSizeKB) {
        console.log(`File size exceeds maximum allowed: ${maxSizeKB} KB`);
        return false;
    }
    return true;
};