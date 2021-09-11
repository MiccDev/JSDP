export * from "./CRITERIA_TYPES";
export * from "./TEAM_COLORS";
export * from "./ITEMS";

export type LiteralUnion<T extends string> = T | string & Record<never, never>