export interface SearchResult {
    score?: number;
    show?:  Show;
}

export interface Show {
    id?:             number;
    url?:            string;
    name?:           string;
    type?:           string;
    language?:       Language;
    genres?:         string[];
    status?:         Status;
    runtime?:        number | null;
    averageRuntime?: number | null;
    premiered?:      Date | null;
    ended?:          Date | null;
    officialSite?:   null | string;
    schedule?:       Schedule;
    rating?:         Rating;
    weight?:         number;
    network?:        Network | null;
    webChannel?:     Network | null;
    dvdCountry?:     null;
    externals?:      Externals;
    image?:          Image | null;
    summary?:        string;
    updated?:        number;
    _links?:         Links;
}

export interface Links {
    self?:             Self;
    previousepisode?: Previousepisode;
}

export interface Previousepisode {
    href?: string;
    name?: string;
}

export interface Self {
    href?: string;
}

export interface Externals {
    tvrage?:  number | null;
    thetvdb?: number;
    imdb?:    null | string;
}

export interface Image {
    medium?:   string;
    original?: string;
}

export enum Language {
    English = "English",
    Japanese = "Japanese",
    Korean = "Korean",
}

export interface Network {
    id?:           number;
    name?:         string;
    country?:      Country | null;
    officialSite?: null | string;
}

export interface Country {
    name?:     string;
    code?:     string;
    timezone?: string;
}

export interface Rating {
    average?: number | null;
}

export interface Schedule {
    time?: string;
    days?: Day[];
}

export enum Day {
    Monday = "Monday",
    Sunday = "Sunday",
    Tuesday = "Tuesday",
}

export enum Status {
    Ended = "Ended",
    InDevelopment = "In Development",
    Running = "Running",
}
