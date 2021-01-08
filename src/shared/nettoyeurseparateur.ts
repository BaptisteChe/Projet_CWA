import { Alarme } from './alarme';
import { Cereale } from './cereale';
import { CausesAlarme, Nom } from './enumeration';

/* Nettoie et retire les impuretes d une instance de Cereale */

export class NettoyeurSeparateur
{
//VARIABLES
  private bourrage :  boolean;
  private poids : number;
  private cerealesATraiter : Cereale;
  private alarme : Alarme;

//CONSTRUCTEUR

  constructor()
  {
    this.bourrage = false;
    this.cerealesATraiter = null;
    this.poids = 15;
    this.alarme = new Alarme();
  }

//ACCESSEURS
  /* Methode renvoyant un booleen informant si la cellule est vide */
  isVide() : boolean
  {
    //Verifie si la variable cerealeATraiter est null
    if(this.cerealesATraiter == null)
      return true;
    else{
      return false;
    }
  }

  getCereale() : Cereale
  {
    //Verifie si le nettoyeur est vide
    if(this.isVide())
      //Retourne une instance non parametree de Cereale mais avec un Nom.Rien
      return new Cereale(Nom.Rien);
    else
      return this.cerealesATraiter;
  }

  getAlarme() : Alarme
  {
    return this.alarme;
  }

  getBourrage() : boolean
  {
    return this.bourrage;
  }

  setBourrage(bourrage : boolean){
    this.bourrage = bourrage;
    this.alarme.setIsActive(bourrage);
  }

//FONCTIONS

  /* Methode de reception d une instance de Cereale et affectation de celle-ci a la variable cerealeATraiter */
  remplirNettoyeurSeparateur(cereale : Cereale){
    //Verifie si le nettoyeur est vide
    if(this.isVide())
      this.cerealesATraiter = cereale;
  }

  /* Methode retournant si le nettoyeur est en bourrage */
  bourrageAlarme() : boolean
  {
    //Verifie si le nettoyeur n est pas vide
    if(!this.isVide())
      //Verifie si la masse de la cerealeATraiter est superieure au poid supporte du nettoyeur
      if(this.cerealesATraiter.getMasse() > this.poids){
        this.bourrage = true;
        //Active l alarme
        this.alarme.setIsActive(true);
        //Donne une cause a l alarme
        this.alarme.setCause(CausesAlarme.bourrageNettoyeur);
      }
    return this.bourrage;
  }
  
  /* Methode nettoyant et retirant les impuretes de la cerealeATraiter */
  nettoyer()
  {
    //Verifie si l alarme du nettoyeur n est pas activee et si le nettoyeur n est pas vide
    if(!this.bourrageAlarme() && !this.isVide()){
      //On retire les impuretes de la cereale
      this.cerealesATraiter.getImpurete().setGrosElem(false);
      this.cerealesATraiter.getImpurete().setPoussInflam(false);
      this.cerealesATraiter.getImpurete().setElemLegers(false);
      //On passe la variable Nettoye, Separee, Traitee de cerealeATraiter a true 
      this.cerealesATraiter.setNettoye(true);
      this.cerealesATraiter.setSeparee(true);
      this.cerealesATraiter.setTraitee(true);
    }
  }

  /* Methode renvoyant la variable cereale */
  viderNettoyeur() : Cereale
  {
    //Verifie si la tremie n est pas vide
    if(!this.isVide()){
      //On affecte une nouvelle donnee a histo de cerealeATraiter
      this.cerealesATraiter.histo += "\nCéréale Traitée par le Nettoyeur - Separateur";
      //Clonage de la cerealeATraiter
      let c = this.cerealesATraiter;
      //On ecrase la variable cerealeATraiter
      this.cerealesATraiter = null;
      //On renvoie le clone
      return c;
    }
  }
}
