/* Objet representant les impuretes d une Cereale */

export class Impurete
{
//VARIABLES
    private grosElements: boolean;
    private poussieresInflammables: boolean;
    private presenceElementsLegers: boolean;
    private presenceInsectes: boolean;

//CONSTRUCTEUR
    constructor(grosElements:boolean, poussieresInflammables:boolean, presenceElementsLegers:boolean, presenceInsectes:boolean){
        this.grosElements = grosElements;
        this.poussieresInflammables = poussieresInflammables;
        this.presenceElementsLegers = presenceElementsLegers;
        this.presenceInsectes = presenceInsectes;
    }

//ACCESSEURS
    getGrosElem() : boolean
    {
        return this.grosElements;
    }

    setGrosElem(elem: boolean)
    {
        this.grosElements = elem;
    }

    getPoussInflam() : boolean
    {
        return this.poussieresInflammables;
    }

    setPoussInflam(poussInflam)
    {
        this.poussieresInflammables = poussInflam;
    }

    getElemLegers() : boolean
    {
        return this.presenceElementsLegers;
    }

    setElemLegers(elemLeger)
    {
        this.presenceElementsLegers = elemLeger;
    }

    getInsectes() : boolean
    {
        return this.presenceInsectes;
    }

    setInsectes(insecte: boolean){
        this.presenceInsectes = insecte;
    }
}