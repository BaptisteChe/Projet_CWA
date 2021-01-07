import { Impurete } from './impurete';
import { Qualite, Nom, Expedition, Element_Indesirable } from './enumeration';

/* Objet cle pour le fonctionnement de la SARL BEUZELIN */

export class Cereale 
{
//VARIABLES
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

//CONSTRUCTEUR
    constructor(nom : Nom){
        this.nom = nom;
        this.histo = "Rien";
    }

//ACCESSEURS
    getNom() : Nom
    {
        return this.nom;
    }

    setNom(nom: Nom)
    {
        this.nom = nom;
    }

    getMasse() : number
    {
        return this.masse;
    }

    setMasse(masse: number)
    {
        this.masse = masse;
    }

    getImpurete() : Impurete
    {
        return this.impurete;
    }

    setImpurete(impurete: Impurete)
    {
        this.impurete = impurete;
    }

    getElIndesirable() : Element_Indesirable
    {
        return this.element_ind;
    }

    setElIndesirable(indesirable: Element_Indesirable)
    {
        this.element_ind = indesirable;
    }

    getHumidite() : number
    {
        return this.tauxHumidite;
    }

    setHumidite(humidite: number)
    {
        this.tauxHumidite = humidite;
    }

    getTemperature() : number
    {
        return this.temperature;
    }

    setTemperature(temp: number)
    {
        this.temperature = temp;
    }

    getQualite() : Qualite
    {
        return this.qualite;
    }

    setQualite(qua: Qualite)
    {
        this.qualite = qua;
    }

    getTriee() : boolean
    {
        return this.triee;
    }

    setTriee(trie: boolean)
    {
        this.triee = trie;
    }

    getNettoyee() : boolean
    {
        return this.nettoyee;
    }

    setNettoye(net: boolean)
    {
        this.nettoyee = net;
    }

    getSeparee() : boolean
    {
        return this.separee;
    }

    setSeparee(separee: boolean){
        this.separee = separee;
    }

    getTraitee() : boolean
    {
        return this.traitee;
    }

    setTraitee(traitee: boolean){
        this.traitee = traitee;
    }

    getExpedition() : Expedition
    {
        return this.expedition;
    }

    setExpedition(exp: Expedition)
    {
        this.expedition = exp;
    }

    getHisto() : string
    {
        return this.histo;
    }

    setHisto(histo: string){
        this.histo = histo;
    }

}
