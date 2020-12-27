import { Cereale } from './cereale';
import { Nom } from './enumeration';

export class Camion
{
    private cereale : Cereale;

    constructor(){
        this.cereale = null;
    }

    generationCereale(){
        let nom: Nom;
        let alea: Number;
        alea = this.getRandomInt(0, 3);
        this.cereale = new Cereale(nom);
    }

    getRandomInt(min, max):Number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
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
