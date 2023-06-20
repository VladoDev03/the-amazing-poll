export const getPercentages = (count: number, sum: number): number[] => {
    if (count === 1) {
        return [100];
    }

    const randomNumbers: number[] = [];

    for (let i = 0; i < count - 1; i++) {
        let randomNumber = Math.round(Math.random() * (sum - 1)) + 1;

        randomNumbers.push(randomNumber);
    }

    randomNumbers.sort((a, b) => a - b);

    const differences: number[] = [];

    for (let i = 0; i < count - 1; i++) {
        const diff = randomNumbers[i + 1] - randomNumbers[i];

        differences.push(diff);
    }

    const numbers: number[] = [];

    numbers.push(randomNumbers[0]);

    for (let i = 0; i < count - 2; i++) {
        numbers.push(differences[i]);
    }

    numbers.push(sum - randomNumbers[count - 2]);

    for (let i = count - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers;
};
