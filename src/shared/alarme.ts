export enum CausesAlarme{
    bourrageTremieVrac = "bourrageTremieVrac",
    perteDeGrain = "perteDeGrain",
    incendie = "incendie",
}

export class alarme{
    isActive: boolean;
    cause: string;

    constructor(isActive: boolean, cause: string){
        this.isActive = isActive;
        this.cause = cause;
    }
}

