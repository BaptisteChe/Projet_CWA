import { Alarme } from './alarme';
import { Cereale } from './cereale';
import { Element_Indesirable } from './enumeration';


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

//FONCTIONS

  isVide(){
    if(this.cerealesATraiter == null)
      return true;
    else
      return false;
  }

  triage()
  {
    if(!this.bourrage && !this.isVide){
      this.cerealesATraiter.element_ind = Element_Indesirable.Clean;
      this.cerealesATraiter.triee = true;
    }
  }

  bourrageAlarme()
  {
    if(this.cerealesATraiter.masse > this.poids){
      this.bourrage = true;
      console.error("Alarme Activée dans la Tremie Vrac !");
    }
  }

  viderTremie(){
    this.cerealesATraiter.histo += "Céréale Traitée par la Trémie-Vrac";
    let c = this.cerealesATraiter;
    this.cerealesATraiter = null;
    return c;
  }
}
