import { Cereale } from './cereale';

export class FosseReception
{
  private cereale : Cereale;

//CONSTRUCTEUR

  constructor()
  {
    this.cereale = null;
  }

//FONCTIONS

  //Test si la fosse est vide ou non
  isVide()
  {
    if(this.cereale == null)
      return true;
    else
      return false;
  }

  reception(cereale : Cereale ) 
  {
    if(this.isVide()){
      this.cereale = cereale;
      this.cereale.histo += "Dans la Fosse";
    }else{
      console.error("La Fosse a déjà une céréale !")
    }
  }

  expedition() : Cereale
  {
    this.cereale.histo += "Check Fosse";
    let c : Cereale = this.cereale;
    this.cereale = null;
    return c;
  }

}
