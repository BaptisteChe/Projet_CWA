import { Alarme } from './alarme';
import { Cereale } from './cereale';
import { CausesAlarme, Element_Indesirable, Nom } from './enumeration';

/* Trie et retire les Elements Indesirables d une instance de Cereale */

export class TremieVrac
{
//VARIABLES
  private bourrage : boolean;
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
  isVide()
  {
    //Verifie si la variable cerealeATraiter est null
    if(this.cerealesATraiter == null)
      return true;
    else{
      return false;
    }
  }
  
  getCereale(){
    //Verifie si la tremie est vide
    if(this.isVide())
      //Retourne une instance non parametree de Cereale
      return new Cereale(Nom.Rien);
    else
      return this.cerealesATraiter;
  }

  getAlarme()
  {
    return this.alarme;
  }

  getBourrage(){
    return this.bourrage;
  }

  setBourrage(bourrage : boolean){
    this.bourrage = bourrage;
    this.alarme.setIsActive(bourrage);
  }

//FONCTIONS

  /* Methode de reception d une instance de Cereale et affectation de celle-ci a la variable cerealeATraiter */
  remplirTremie(cereale : Cereale){
    //Verifie si la tremie est vide
    if(this.isVide())
      this.cerealesATraiter = cereale;
  }

  /* Methode retournant si la tremie est en bourrage */
  bourrageAlarme() : boolean
  {
    //Verifie si la tremie n est pas vide
    if(!this.isVide())
      //Verifie si la masse de la cerealeATraiter est superieure au poid supporte de la tremie
      if(this.cerealesATraiter.getMasse() > this.poids){
        this.bourrage = true;
        //Active l alarme
        this.alarme.setIsActive(true);  
        //Donne une cause a l alarme
        this.alarme.setCause(CausesAlarme.bourrageTremieVrac);
      }
    return this.bourrage;
  }
  
  /* Methode triant et retirant les elements indesirables de la cerealeATraiter */
  triage()
  {
    //Verifie si l alarme de la tremie n est pas activee et si la tremie n est pas vide
    if(!this.bourrageAlarme() && !this.isVide()){
      //On retire les elements indesirables de la cereale
      this.cerealesATraiter.setElIndesirable(Element_Indesirable.Clean);
      //On passe la variable Triee de cerealeATraiter a true 
      this.cerealesATraiter.setTriee(true);
    }
  }

  /* Methode renvoyant la variable cereale */
  viderTremie() : Cereale
  {
    //Verifie si la tremie n est pas vide
    if(!this.isVide())
    {
      //On affecte une nouvelle donnee a histo de cerealeATraiter
      this.cerealesATraiter.setHisto(this.cerealesATraiter.getHisto()+"\nCéréale Traitée par la Trémie-Vrac");
      //Clonage de la cereale
      let c = this.cerealesATraiter;
      //On ecrase la variable cereale 
      this.cerealesATraiter = null;
      //On renvoie le clone
      return c;
    }
  }
}
