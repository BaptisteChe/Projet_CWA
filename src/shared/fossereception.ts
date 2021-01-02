import { Cereale } from './cereale';
import { Nom } from './enumeration';

export class FosseReception
{
  private cereale : Cereale;

//CONSTRUCTEUR

  constructor()
  {
    this.cereale = null;
  }

  getCereale(){
    if(this.isVide())
      return Nom.Rien;
    else
      return this.cereale.nom;
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
      this.cereale.histo += "\nPassée dans la Fosse";
    }else{
      console.error("La Fosse a déjà une céréale !")
    }
  }

  expedition() : Cereale
  {
    console.log(this.cereale.histo);
    let c : Cereale = this.cereale;
    this.cereale = null;
    return c;
  }

}
