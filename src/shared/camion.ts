import { Cereale } from './cereale';
import { Nom, Qualite, } from './enumeration';
import { Impurete } from './impurete';

export class Camion
{
    private cereale : Cereale;

    public constructor(){
        this.cereale = null;
    }

    getCereale(){
        if(this.isVide())
            return Nom.Rien.toString();
        else
            return this.cereale.histo;
    }
    
    isVide(){
        if(this.cereale == null)
            return true;
        else{
            return false;
        }
    }

    generationCereale(){
        let alea;
        alea = this.getRandomInt(0, 4);
        let nom : Nom;
        switch(alea){
            case 0: 
                nom = Nom.Ble;
                break;
            case 1: 
                nom = Nom.Colza;
                break;
            case 2:
                nom = Nom.Orge;
                break;
            case 3:
                nom = Nom.Pois;
                break;
        }
        this.cereale = new Cereale(nom);
        this.cereale.histo = "Arrivée de "+this.cereale.getNom().toString();
    }

    getRandomInt(min, max): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    pesee(){
        let alea;
        alea = this.getRandomInt(5, 17);
        this.cereale.setMasse(alea);
        this.cereale.histo += "\nPoid de la céréale : "+this.cereale.getMasse();
    }

    echantillonnage(){
        //Méthode de la génération de la Qualité, du taux d'humidité et des impuretés de la Céréale
        let alea;
        alea = this.getRandomInt(5, 50);
        this.cereale.setHumidite(alea);

        alea = this.getRandomInt(30, 35);
        this.cereale.setTemperature(alea);

        alea = this.getRandomInt(0, 5);
        let qualite : Qualite;
        switch(alea){
            case 0: 
                qualite = Qualite.bonne;
                break;
            case 1: 
                qualite = Qualite.excellente;
                break;
            case 2:
                qualite = Qualite.mediocre;
                break;
            case 3:
                qualite = Qualite.passable;
                break;
            case 4:
                qualite = Qualite.premium;
                break;
        }
        this.cereale.setQualite(qualite);

        let ge = Boolean(Math.round(Math.random()));
        let pi = Boolean(Math.round(Math.random()));
        let pel = Boolean(Math.round(Math.random()));
        let pin = Boolean(Math.round(Math.random()));
        this.cereale.setImpurete(new Impurete(ge,pi,pel,pin));
        this.cereale.histo += "\nEchantillonnage de la céréale : "+this.cereale.getQualite().toString();
    }

    vidercamion(){
        console.log(this.cereale.histo);
        let c = this.cereale;
        this.cereale = null;
        return c;
    }
}
