import { Alarme } from './alarme';
import { Cereale } from './cereale';
import { CausesAlarme, Nom } from './enumeration';

export class NettoyeurSeparateur
{
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

  isVide()
  {
    if(this.cerealesATraiter == null)
      return true;
    else{
      return false;
    }
  }

  getBourrage()
  {
    return this.bourrage;
  }

  setBourrage(bourrage : boolean)
  {
    this.bourrage = bourrage;
    this.alarme.setIsActive(bourrage);
  }

  getAlarme(){
    return this.alarme;
  }

  getCerealesATraiter()
  {
    return this.cerealesATraiter;
  }

  getCereale(){
    if(this.isVide())
      return new Cereale(Nom.Rien);
    else
      return this.cerealesATraiter;
  }


  setCerealesATraiter(cerealesATraiter : Cereale )
  {
    this.cerealesATraiter = cerealesATraiter;
  }

//FONCTIONS

  remplirNettoyeurSeparateur(cereale : Cereale){
    this.cerealesATraiter = cereale;
  }
  
  nettoyer()
  {
    if(!this.bourrageAlarme() && !this.isVide()){
      this.cerealesATraiter.setNettoye(true);
      this.cerealesATraiter.getImpurete().setGrosElem(false);
      this.cerealesATraiter.getImpurete().setPoussInflam(false);
      this.cerealesATraiter.getImpurete().setElemLegers(false);
    }
  }

  bourrageAlarme() : boolean
  {
    if(!this.isVide())
      if(this.cerealesATraiter.getMasse() > this.poids){
        this.bourrage = true;
        this.alarme.setIsActive(true);
        this.alarme.setCause(CausesAlarme.bourrageNettoyeur);
        console.error("Alarme Activée dans le Nettoyeur-Séparateur !")
      }
    return this.bourrage;
  }

  viderNettoyeur() : Cereale
  {
    this.cerealesATraiter.histo += "\nCéréale Traitée par le Nettoyeur - Separateur";
    let c = this.cerealesATraiter;
    this.cerealesATraiter = null;
    return c;
  }
}
