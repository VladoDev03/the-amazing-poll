export const isEmpty = (input: string): boolean => {
    if (input.trim().length === 0) {
        return true;
    }

    return false;
};
