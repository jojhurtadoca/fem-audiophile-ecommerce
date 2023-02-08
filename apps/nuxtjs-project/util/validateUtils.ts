export const validateRequired = (str: string): boolean => {
    console.log('validate', str);
    return str !== undefined && str !== null && str !== '';
}

export const validateNumeric = (str: string): boolean => {
    return /^-?\d+$/.test(str);
}