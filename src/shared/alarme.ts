export enum CausesAlarme{
    bourrageTremieVrac = "bourrageTremieVrac",
    perteDeGrain = "perteDeGrain",
    incendie = "incendie",
    ok = "ok"
}

export class Alarme{
    isActive: boolean;
    cause: CausesAlarme;

    constructor(isActive: boolean, cause: CausesAlarme){
        this.isActive = isActive;
        this.cause = cause;
    }
}

