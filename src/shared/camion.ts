import { Cereale } from './cereale';
import { Nom, Qualite, } from './enumeration';
import { Impurete } from './impurete';

export class Camion
{
    private cereale : Cereale;

    constructor(){
        this.cereale = null;
    }

    generationCereale(){
        let alea;
        alea = this.getRandomInt(0, 4);
        this.cereale = new Cereale(Nom[alea]);
    }

    getRandomInt(min, max):Number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    pesee(){
        let alea;
        alea = this.getRandomInt(5, 25);
        this.cereale.masse = alea;
    }

    echantillonnage(){
        //Méthode de la génération de la Qualité, du taux d'humidité et des impuretés de la Céréale
        let alea;
        alea = this.getRandomInt(5, 50);
        this.cereale.tauxHumidite = alea;
        alea = this.getRandomInt(0, 5);
        this.cereale.qualite = Qualite[alea];
        let ge = Boolean(Math.round(Math.random()));
        let pi = Boolean(Math.round(Math.random()));
        let pel = Boolean(Math.round(Math.random()));
        let pin = Boolean(Math.round(Math.random()));
        this.cereale.impurete = new Impurete(ge,pi,pel,pin);
    }

    vidercamion(){
        this.cereale.histo += " Arrivée de "+this.cereale.nom
                             +"\n Poid de la céréale : "+this.cereale.masse
                             +"\n Echantillonnage de la céréale : "+this.cereale.qualite;
        console.log(this.cereale.histo);
        let c = this.cereale;
        this.cereale = null;
        return c;
    }
}
