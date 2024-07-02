///INTERFACES PARA LA SOLUCIÓN//

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Origin {
    name: string;
    url: string;
}

export interface ILocationRyckM extends Origin {
    id: number;
    type: string;
    dimension: string;
    residents: string[];
    created: Date;
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface IResult {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface IRickAndMorty {
    info: Info;
    results: IResult[];
}