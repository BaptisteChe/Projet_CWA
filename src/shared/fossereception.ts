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

//ACCESSEURS

  //Methode renvoyant un booleen informant si le boisseau est vide
  isVide() : boolean
  {
    //Verifie si la variable cereale est null
    if(this.cereale == null)
      return true;
    else
      return false;
  }

  getCereale() : Cereale
  {
    return this.cereale;
  }

//FONCTIONS

  /* Methode de reception d une instance de Cereale et affectation de celle-ci a la variable cereale */
  reception(cereale : Cereale ) 
  {
    //Verifie si la fosse est vide
    if(this.isVide()){
      //On affecte la variable passee en parametre a cereale
      this.cereale = cereale;
    }
  }

  /* Methode renvoyant la variable cereale */
  expedition() : Cereale
  {
    //On affecte une nouvelle donnee a histo de cereale
    this.cereale.histo += "\nPassée dans la Fosse";
    //Clonage de la cereale
    let c : Cereale = this.cereale;
    //On ecrase la variable cereale 
    this.cereale = null;
    //On renvoie le clone
    return c;
  }

}
