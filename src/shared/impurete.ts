export class Impurete{

    grosElements: boolean;
    poussieresInflammables: boolean;
    presenceElementsLegers: boolean;
    presenceInsectes: boolean;

    constructor(grosElements:boolean, poussieresInflammables:boolean, presenceElementsLegers:boolean, presenceInsectes:boolean){
        this.grosElements = grosElements;
        this.poussieresInflammables = poussieresInflammables;
        this.presenceElementsLegers = presenceElementsLegers;
        this.presenceInsectes = presenceInsectes;
    }

}