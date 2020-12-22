import { Cereale, Element_Indesirable } from './cereale';


export class TremieVrac
{
  private bourrage : boolean;
  private poids : number;
  private cerealesATraiter : Cereale;

//CONSTRUCTEUR

  constructor()
  {
    this.bourrage = false;
    this.cerealesATraiter = null;
    this.poids = 50;
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
