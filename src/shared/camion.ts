import { Cereale } from './cereale';
import { Nom, Qualite } from './enumeration';
import { Impurete } from './impurete';

/*Classe generant une instance de Cereale avec divers parametres */

export class Camion
{
//VARIABLE
    private cereale : Cereale;

//CONSTRUCTEUR
    public constructor()
    {
        this.cereale = null;
    }

//ACCESSEURS
    /* Methode renvoyant un booleen informant si le camion est vide */
    isVide() : boolean
    {
        //Verifie si la variable cereale est null
        if(this.cereale == null)
            return true;
        else{
            return false;
        }
    }

    getCereale() : Cereale
    {
        return this.cereale;
    }

    /* Methode renvoyant un entier aleatoire entre min inclus et max non inclus */
    getRandomInt(min, max): number
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
//FONCTIONS
    /* Methode generant une instance de Cereale avec un nom genere aleatoirement et ajoutant une information a son historique */
    generationCereale()
    {
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
        //Historique
        this.cereale.histo = "Arrivée de "+this.cereale.getNom().toString();
    }

    /* Methode generant un entier aleatoire et affectant cet entier a la masse de la cereale et ajoutant une information l historique de celle-ci*/
    pesee()
    {
        let alea;
        alea = this.getRandomInt(5, 17);
        this.cereale.setMasse(alea);
        //Historique
        this.cereale.histo += "\nPoid de la céréale : "+this.cereale.getMasse();
    }

    /* Methode de la generation de la Qualite, du taux d humidite et des impuretes de la Cereale */
    echantillonnage()
    {
        //Taux d humidite
        let alea;
        alea = this.getRandomInt(5, 50);
        this.cereale.setHumidite(alea);
        //Temperature
        alea = this.getRandomInt(30, 35);
        this.cereale.setTemperature(alea);
        //Qualite
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

        //Impuretes
        let ge = Boolean(Math.round(Math.random()));
        let pi = Boolean(Math.round(Math.random()));
        let pel = Boolean(Math.round(Math.random()));
        let pin = Boolean(Math.round(Math.random()));
        this.cereale.setImpurete(new Impurete(ge,pi,pel,pin));
        //Historique
        this.cereale.histo += "\nEchantillonnage de la céréale : "+this.cereale.getQualite().toString();
    }

    /* Methode retournant la Cereale */
    vidercamion() : Cereale
    {
        //Clone la variable cereale
        let c = this.cereale;
        //Passe la variable a null
        this.cereale = null;
        //Retourne le clone
        return c;
    }
}
