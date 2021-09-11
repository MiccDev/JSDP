import Base from "./Base";
declare type _MCFunction = {
    load?: boolean;
    tick?: boolean;
    name: string;
};
declare class MCFunction extends Base {
    opts: _MCFunction;
    name: string;
    private func;
    /**
     * @param {Function} func
     * @param {_McFunction} opts
     */
    constructor(func: Function, opts: _MCFunction);
    eval(): string;
    create(): void;
}
export default class {
    constructor();
    static create(func: Function, opts: _MCFunction): MCFunction;
}
export { MCFunction };
