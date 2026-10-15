export class Engine {
    hersteller: string;
    ps: number;
    kraftstoff: string;

    constructor(hersteller: string, ps: number, kraftstoff: string) {
        this.hersteller = hersteller;
        this.ps = ps;
        this.kraftstoff = kraftstoff;
    }
}

export class Besitzer {
    vorname: string;
    nachname: string;
    alter: number;

    constructor(vorname: string, nachname: string, alter: number) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.alter = alter;
    }
}