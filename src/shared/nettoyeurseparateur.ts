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
      console.error("Nettoyeur Separateur non vide");
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
      return Nom.Rien;
    else
      return this.cerealesATraiter.nom;
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
      this.cerealesATraiter.nettoyee = true;
      this.cerealesATraiter.impurete.grosElements = false;
      this.cerealesATraiter.impurete.poussieresInflammables = false;
      this.cerealesATraiter.impurete.presenceElementsLegers = false;
    }
  }

  bourrageAlarme() : boolean
  {
    if(!this.isVide())
      if(this.cerealesATraiter.masse > this.poids){
        this.bourrage = true;
        this.alarme.setIsActive(true);
        this.alarme.setCause(CausesAlarme.bourrageNettoyeur);
        console.error("Alarme Activée dans le nettoyeur !")
      }
    return this.bourrage;
  }

  viderNettoyeur() : Cereale
  {
    this.cerealesATraiter.histo += "\n Céréale Traitée par le Nettoyeur - Separateur";
    let c = this.cerealesATraiter;
    this.cerealesATraiter = null;
    return c;
  }
}
