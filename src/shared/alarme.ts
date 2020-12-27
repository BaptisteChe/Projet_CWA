import { CausesAlarme } from './enumeration';

export class Alarme{
    private isActive: boolean;
    private cause: CausesAlarme;

    constructor(){
        this.isActive = false;
        this.cause = null;
    }

    setIsActive(active : boolean){
        this.isActive = active;
    }

    setCause(cause : CausesAlarme){
        this.cause = cause;
    }
    
    getIsActive() : boolean{
        return this.isActive;
    }

    getCause() : CausesAlarme{
        return this.cause;
    }
}