export class Impurete{

    grosElements: Boolean;
    poussieresInflammables: Boolean;
    presenceElementsLegers: Boolean;
    presenceInsectes: Boolean;

    constructor(grosElements:Boolean, poussieresInflammables:Boolean, presenceElementsLegers:Boolean, presenceInsectes:Boolean){
        this.grosElements = grosElements;
        this.poussieresInflammables = poussieresInflammables;
        this.presenceElementsLegers = presenceElementsLegers;
        this.presenceInsectes = presenceInsectes;
    }

}