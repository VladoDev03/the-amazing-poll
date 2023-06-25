import Choice from "./Choice";

class Poll {
    title: string;
    choices: Choice[];

    constructor(title: string, choices: Choice[]) {
        this.title = title;
        this.choices = choices;
    }
}

export default Poll;
