import { Cereale } from './cereale';
import { Expedition, Nom } from './enumeration';

export class BoisseauChargement
{
//VARIABLES
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
    else{
      return false;
    }
  }

  getCereale() : Cereale
  {
    //Verifie si le boisseau n est pas vide
    if(!this.isVide())
      //Si oui retourne la variable cereale
      return this.cereale;
    else
      //Si non retourne une instance de cereale nom parametree
      return new Cereale(Nom.Rien);
  }

  setCereale(cereale : Cereale )
  {
    this.cereale = cereale;
  }


//FONCTIONS

  //Methode de generation d un lieu d expedition affectee a une des variables de la cereale et renvoyant ce lieu
  genererLieuExpedition() : Expedition
  {
    let nbr = Math.round(Math.random());
    if(nbr == 0){
      this.cereale.setExpedition(Expedition.seine_Maritime);
    }else
      this.cereale.setExpedition(Expedition.meunerie);

    return this.cereale.getExpedition();
  }

  //Methode renvoyant la variable cereale si le boisseau n est pas vide avec sa variable histo modifiee
  expedition() : Cereale
  {
    //Verifie si le boisseau n est pas vide
    if(!this.isVide())
    {
      //Affectation a une nouvelle variable des caracteres suivants
      let histo = "---------------------------------------------------\n";
      //Ajout du lieu d expedition a l historique de la cereale en la generant en appelant la methode generationLieuExpedition
      this.cereale.histo += "\nCéréale chargée et au départ de : " + this.genererLieuExpedition();
      histo += this.cereale.histo+"\n---------------------------------------------------\n\n";
      //Affectation de la nouvelle variable a lhistorique de la cereale
      this.cereale.histo = histo;
      //Clonage de la cereale
      let c : Cereale = this.cereale;
      //On ecrase la variable cereale 
      this.cereale = null;
      //On renvoie le clone
      return c;
    }else
      //Sinon on renvoie une nouvelle instance de cereale non parametree
      return new Cereale(Nom.Rien);
  }
}
