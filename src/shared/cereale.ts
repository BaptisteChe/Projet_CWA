import { Impurete } from './impurete';
import { Qualite, Nom, Expedition, Element_Indesirable } from './enumeration';


export class Cereale {
    private nom: Nom;
    private masse: number;
    private impurete: Impurete;
    private element_ind: Element_Indesirable;
    private tauxHumidite: number;
    private temperature : number;
    private qualite: Qualite;
    private triee: boolean;
    private nettoyee: boolean;
    private separee: boolean;
    private traitee: boolean;
    private expedition : Expedition;
    histo : string;

    constructor(nom : Nom){
        this.nom = nom;
        this.histo = "";
    }

    getNom(){
        return this.nom;
    }

    setNom(nom: Nom){
        this.nom = nom;
    }

    getMasse(){
        return this.masse;
    }

    setMasse(masse: number){
        this.masse = masse;
    }

    getImpurete(){
        return this.impurete;
    }

    setImpurete(impurete: Impurete){
        this.impurete = impurete;
    }

    getElIndesirable(){
        return this.element_ind;
    }

    setElIndesirable(indesirable: Element_Indesirable){
        this.element_ind = indesirable;
    }

    getHumidite(){
        return this.tauxHumidite;
    }

    setHumidite(humidite: number){
        this.tauxHumidite = humidite;
    }

    getTemperature(){
        return this.temperature;
    }

    setTemperature(temp: number){
        this.temperature = temp;
    }

    getQualite(){
        return this.qualite;
    }

    setQualite(qua: Qualite){
        this.qualite = qua;
    }

    getTriee(){
        return this.triee;
    }

    setTriee(trie: boolean){
        this.triee = trie;
    }

    getNettoyee(){
        return this.nettoyee;
    }

    setNettoye(net: boolean){
        this.nettoyee = net;
    }

    getSeparee(){
        return this.separee;
    }

    setSeparee(separee: boolean){
        this.separee = separee;
    }

    getTraitee(){
        return this.traitee;
    }

    setTraitee(traitee: boolean){
        this.traitee = traitee;
    }

    getExpedition(){
        return this.expedition;
    }

    setExpedition(exp: Expedition){
        this.expedition = exp;
    }

    getHisto(){
        return this.histo;
    }

    setHisto(histo: string){
        this.histo = histo;
    }

}
