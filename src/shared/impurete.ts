export class Impurete{

    private grosElements: boolean;
    private poussieresInflammables: boolean;
    private presenceElementsLegers: boolean;
    private presenceInsectes: boolean;

    constructor(grosElements:boolean, poussieresInflammables:boolean, presenceElementsLegers:boolean, presenceInsectes:boolean){
        this.grosElements = grosElements;
        this.poussieresInflammables = poussieresInflammables;
        this.presenceElementsLegers = presenceElementsLegers;
        this.presenceInsectes = presenceInsectes;
    }

    getGrosElem(){
        return this.grosElements;
    }

    setGrosElem(elem: boolean){
        this.grosElements = elem;
    }

    getPoussInflam(){
        return this.poussieresInflammables;
    }

    setPoussInflam(poussInflam){
        this.poussieresInflammables = poussInflam;
    }

    getElemLegers(){
        return this.presenceElementsLegers;
    }

    setElemLegers(elemLeger){
        this.presenceElementsLegers = elemLeger;
    }

    getInsectes(){
        return this.presenceInsectes;
    }

    setInsectes(insecte: boolean){
        this.presenceInsectes = insecte;
    }
}