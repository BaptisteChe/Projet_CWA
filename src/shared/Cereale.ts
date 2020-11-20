import { Impurete } from './Impurete';

export enum Qualite{
    mediocre = "mediocre",
    passable = "passable",
    bonne = "bonne",
    excellente = "excellente",
    premium = "premium",        
}

export enum Nom{
    Orge = "Orge",
    Ble = "Ble",
    Colza = "Colza",
    Pois = "Pois",
}

export  class Cereale {
    nom: String;
    masse: number;
    impurete: Impurete;
    tauxHumidité: number;
    qualite: string;
    triee: boolean;
    netoyee: boolean;
    separee: boolean;
    traitee: boolean;

    constructor(nom: string, masse: number, tauxHumidité: number, qualite: string, impurete: Impurete, triee: boolean, netoyee: boolean, separee: boolean, traitee: boolean) {
        this.nom = nom;
        this.masse = masse;
        this.tauxHumidité = tauxHumidité;
        this.qualite = qualite;
        this.impurete = impurete;
        this.triee = triee;
        this.netoyee = netoyee;
        this.separee = separee;
        this.traitee = traitee;
    }

    acheminement(lieu: string){

    }

    historiqueOperationEffectuees(){

    }

    historiqueLieuxStockage(){

    }

    detailsExpedition(){

    }
}



/*export const CEREALES: Cereale[] = [
    {nom: "Blé", masse: 42, tauxHumidité: 0.1, qualite: "Excellent"},
    {nom: "Maïs", masse: 100, tauxHumidité: 0.1, qualite: "Médiocre"}
];*/