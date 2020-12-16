import { Impurete } from './impurete';
import { NettoyeurSeparateur } from './nettoyeurseparateur';
import { TremieVrac } from './tremievrac';

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

export enum Lieu{
    TremieVrac = "TremieVrac",
    BoisseauChargement = "BoisseauChargement",
    FosseReception = "FosseReception",
    NettoyeurSeparateur = "NettoyeurSeparateur",
    Cellule = "Cellule",
}

export class Cereale {
    nom: Nom;
    masse: number;
    impurete: Impurete;
    tauxHumidite: number;
    qualite: Qualite;
    triee: boolean;
    nettoyee: boolean;
    separee: boolean;
    traitee: boolean;
    historiqueLieu: Lieu[];

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

    acheminement(lieu: String){
        switch(lieu){
            case "TremieVrac":{
                this.triee = true;
                this.historiqueLieu.push(Lieu.TremieVrac);
                break;
            }
            case "NettoyeurSeparateur":{
                this.nettoyee = true;
                this.separee = true;
                this.historiqueLieu.push(Lieu.NettoyeurSeparateur);
                break;
            }
            case "BoisseauChargement":{
                this.historiqueLieu.push(Lieu.BoisseauChargement);
                break;
            }
            case "FosseReception":{
                this.historiqueLieu.push(Lieu.FosseReception);
                break;
            }
            case "Cellule":{
                this.historiqueLieu.push(Lieu.Cellule);
                break;
            }
        } 
    }

    historiqueOperationEffectuees():string{
        let str: string;
        if(this.triee == true) str += "Céréale: triée\n";
        if(this.nettoyee == true) str += "Céréale: nétoyee\n";
        if(this.separee == true) str += "Céréale: separee\n";
        return str;
    }

    historiqueLieuxStockage():string{
        let str: string = this.historiqueLieu.toString();
        return str;
    }

    detailsExpedition():string{
        let str: string = `Nous expédions du ${this.nom}\n
            Ces céréales pesent ${this.masse}\n
            Elles ont une qualitée ${this.qualite}`;
        return str;
    }
}



/*export const CEREALES: Cereale[] = [
    {nom: "Blé", masse: 42, tauxHumidité: 0.1, qualite: "Excellent"},
    {nom: "Maïs", masse: 100, tauxHumidité: 0.1, qualite: "Médiocre"}
];*/
