import { Alarme } from './alarme';
import { Cereale } from './cereale';
import { CausesAlarme, Element_Indesirable } from './enumeration';


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
    this.poids = 50;
    this.alarme = new Alarme();
  }

//Accesseur
  getAlarme()
  {
    return this.alarme;
  }

//FONCTIONS

  isVide()
  {
    if(this.cerealesATraiter == null)
      return true;
    else{
      console.error("Tremie vrac non vide");
      return false;
    }
  }

  remplirTremie(cereale : Cereale){
    this.cerealesATraiter = cereale;
  }
  
  triage()
  {
    if(!this.bourrageAlarme() && !this.isVide){
      this.cerealesATraiter.element_ind = Element_Indesirable.Clean;
      this.cerealesATraiter.triee = true;
    }
  }

  bourrageAlarme() : boolean
  {
    if(this.cerealesATraiter.masse > this.poids){
      this.bourrage = true;
      this.alarme.setIsActive(true);
      this.alarme.setCause(CausesAlarme.bourrageTremieVrac);
      console.error("Alarme Activée dans la Tremie Vrac !");
    }
    return this.bourrage;
  }

  viderTremie() : Cereale
  {
    this.cerealesATraiter.histo += "Céréale Traitée par la Trémie-Vrac";
    let c = this.cerealesATraiter;
    this.cerealesATraiter = null;
    return c;
  }
}
