import { Alarme } from './alarme';
import { Cereale } from './cereale';
import { CausesAlarme, Element_Indesirable, Nom } from './enumeration';


export class TremieVrac
{
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

//Accesseur
  getAlarme()
  {
    return this.alarme;
  }

  getCereale(){
    if(this.isVide())
      return Nom.Rien;
    else
      return this.cerealesATraiter.getNom();
  }

  getBourrage(){
    return this.bourrage;
  }

  setBourrage(bourrage : boolean){
    this.bourrage = bourrage;
    this.alarme.setIsActive(bourrage);
  }

//FONCTIONS

  isVide()
  {
    if(this.cerealesATraiter == null)
      return true;
    else{
      return false;
    }
  }

  remplirTremie(cereale : Cereale){
    if(this.isVide())
      this.cerealesATraiter = cereale;
  }
  
  triage()
  {
    if(!this.bourrageAlarme() && !this.isVide){
      this.cerealesATraiter.setElIndesirable(Element_Indesirable.Clean);
      this.cerealesATraiter.setTriee(true);
    }
  }

  bourrageAlarme() : boolean
  {
    if(!this.isVide())
      if(this.cerealesATraiter.getMasse() > this.poids){
        this.bourrage = true;
        this.alarme.setIsActive(true);
        this.alarme.setCause(CausesAlarme.bourrageTremieVrac);
        console.error("Alarme Activée dans la Tremie Vrac !");
      }
    return this.bourrage;
  }

  viderTremie() : Cereale
  {
    if(!this.isVide())
    {
      this.cerealesATraiter.setHisto(this.cerealesATraiter.getHisto()+"\nCéréale Traitée par la Trémie-Vrac");
      let c = this.cerealesATraiter;
      this.cerealesATraiter = null;
      return c;
    }
  }
}
