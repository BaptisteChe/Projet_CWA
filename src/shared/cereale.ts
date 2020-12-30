import { Impurete } from './impurete';
import { NettoyeurSeparateur } from './nettoyeurseparateur';
import { TremieVrac } from './tremievrac';
import { Qualite, Nom, Expedition, Element_Indesirable } from './enumeration';


export class Cereale {
    nom: Nom;
    masse: number;
    impurete: Impurete;
    element_ind: Element_Indesirable;
    tauxHumidite: number;
    qualite: Qualite;
    triee: boolean;
    nettoyee: boolean;
    separee: boolean;
    traitee: boolean;
    expedition : Expedition;
    histo : string = "";

    constructor(nom : Nom){
        this.nom = nom;
    }

/*
    constructor(nom: Nom, masse: number, tauxHumidite: number, qualite: Qualite, impurete: Impurete, triee: boolean, nettoyee: boolean, separee: boolean, traitee: boolean) {
        this.nom = nom;
        this.masse = masse;
        this.tauxHumidite = tauxHumidite;
        this.qualite = qualite;
        this.impurete = impurete;
        this.triee = triee;
        this.nettoyee = nettoyee;
        this.separee = separee;
        this.traitee = traitee;
    }
*/
}



/*export const CEREALES: Cereale[] = [
    {nom: "Blé", masse: 42, tauxHumidité: 0.1, qualite: "Excellent"},
    {nom: "Maïs", masse: 100, tauxHumidité: 0.1, qualite: "Médiocre"}
];*/
