import Command from "./Command";
declare type _Scoreboard = {
    add: boolean;
    objective: string;
    criteria: string;
    displayName: string;
};
declare class Scoreboard extends Command {
    private opts;
    constructor(opts: _Scoreboard);
    getGeneratedData(): string;
}
declare const scoreboard: {
    objectives: {
        add: (objective: string, criteria: string, displayName: string) => Scoreboard;
        list: () => void;
    };
};
export default scoreboard;
export { Scoreboard };
