import { CausesAlarme } from './enumeration';

export class Alarme{
    isActive: boolean;
    cause: CausesAlarme;

    constructor(isActive: boolean, cause: CausesAlarme){
        this.isActive = isActive;
        this.cause = cause;
    }
}

