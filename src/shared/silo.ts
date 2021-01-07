import { Cellule } from './cellule';
import { Cereale } from './cereale';

/* Silo stockant plusieurs instances de Cellule contenant des instances de Cereale et des instances de Sonde */

export class Silo
{
//VARIABLES
  private cellules : Cellule[];

//CONSTRUCTEUR

  constructor()
  {
    this.cellules = [];
    for(let i = 0; i < 10; i++){
      this.cellules[i] = new Cellule(i,137);  
    }
  }

//ACCESSEURS

  getCellules() : Cellule[]
  {
    return this.cellules;
  }

  getCellule(index : number) : Cellule
  {
    return this.cellules[index];
  }

  getCelluleIndex(index : number) : number
  {
    if(this.cellules[index].isVide())
      return index;
    else
      return null;
  }

//FONCTIONS
  /* Methode ajoutant une instance de Cereale dans la cellule numero index */
  ajoutCereale(cereale :Cereale, index : number){
    this.cellules[index].ajoutCereale(cereale);
  }

  /* Methode testant si il y a presence d insectes dans la cellule numero index */
  testpresenceInsecte(index : number) : boolean
  {
    let presence = false;
    //Verifie si la cellule numero index n est pas vide
    if(!this.getCellule(index).isVide())
      //Verifie si la cereale contenue dans cellule numero index possede des impuretes de presence d insectes 
      if(this.getCellule(index).getCereale().getImpurete().getInsectes())
        presence = true;
    return presence;
  }

  /* Methode vidant une cellule selon son numero passe en parametre */
  viderCellule(index : number) : Cereale
  {
    //Verifie si la cellule numero index n est pas vide
    if(!this.cellules[index].isVide()){
      //Clonage de la cereale
      let c : Cereale = this.getCellule(index).getCereale();
      //On ecrase la variable cereale de la cellule 
      this.getCellule(index).setCereale(null);
      //On affecte une nouvelle donnee a histo de la cereale
      c.histo += "\nSortie de la cellule numéro : "+index;
      //On renvoie le clone
      return c;
    }
  }

}
