import { Cereale } from './cereale';

export class NettoyeurSeparateur
{
  private bourrage :  boolean;
  private poids : number;
  private cerealesATraiter : Cereale;

//CONSTRUCTEUR

  constructor()
  {
    this.bourrage = false;
    this.cerealesATraiter = null;
    this.poids = 20;
  }

//ACCESSEURS

  isVide(){
    if(this.cerealesATraiter == null)
      return true;
    else
      return false;
  }

  getBourrage()
  {
    return this.bourrage;
  }

  setBourrage(bourrage : boolean)
  {
    this.bourrage = bourrage;
  }

  getCerealesATraiter()
  {
    return this.cerealesATraiter;
  }

  setCerealesATraiter(cerealesATraiter : Cereale )
  {
    this.cerealesATraiter = cerealesATraiter;
  }

//FONCTIONS

  nettoyer()
  {
    if(!this.bourrage && !this.isVide()){
      this.cerealesATraiter.nettoyee = true;
      this.cerealesATraiter.impurete.grosElements = false;
      this.cerealesATraiter.impurete.poussieresInflammables = false;
      this.cerealesATraiter.impurete.presenceElementsLegers = false;
    }
  }

  bourrageAlarme()
  {
    if(this.cerealesATraiter.masse > this.poids){
      this.bourrage = true;
      console.error("Alarme Activée dans le nettoyeur !")
    }
  }

  viderNettoyeur(){
    this.cerealesATraiter.histo += "Céréale Traitée par le Nettoyeur - Separateur";
    let c = this.cerealesATraiter;
    this.cerealesATraiter = null;
    return c;
  }
}
