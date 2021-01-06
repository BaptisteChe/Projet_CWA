import { CausesAlarme } from './enumeration';

export class Alarme{
    
//VARIABLES
    private isActive: boolean;
    private cause: CausesAlarme;

//CONSTRUCTEUR
    constructor(){
        this.isActive = false;
    }

//ACCESSEURS
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