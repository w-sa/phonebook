export interface Person {
  name: string;
  number: string;
}

export interface PersonWithId extends Person {
  id: string;
}

export * from "./interfaces";
