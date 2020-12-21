import { Cereale, Nom, Qualite } from './cereale';

export class Camion
{
    private cereale : Cereale;

    constructor(){
        this.cereale = null;
    }

    generationCereale(){
        //Méthode de génération du nom de la Céréale
    }

    pesee(){
        //Méthode de la génération du poids de la Céréale
    }

    echantillonnage(){
        //Méthode de la génération de la Qualité, du taux d'humidité et des impuretés de la Céréale
    }

    vidercamion(){
        this.cereale.histo += "Arrivée de "+this.cereale.nom;
        let c = this.cereale;
        this.cereale = null;
        return c;
    }
}
