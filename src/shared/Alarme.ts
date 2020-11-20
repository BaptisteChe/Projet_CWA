export enum CausesAlarme{
    bourrageTremieVrac = "bourrageTremieVrac",
    perteDeGrain = "perteDeGrain",
    incendie = "incendie",
}

export class alarme{
    isActive: Boolean;
    cause: String;

    constructor(isActive: Boolean, cause: String){
        this.isActive = isActive;
        this.cause = cause;
    }
}

