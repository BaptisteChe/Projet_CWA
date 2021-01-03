import { Cellule } from './cellule';
import { Cereale } from './cereale';

export class Silo
{
  private cellules : Cellule[] = [];
  /*A tester et à ajouter dans le diag de classe*/ 

//CONSTRUCTEUR

  constructor()
  {
    for(let i = 0; i < 10; i++){
      this.cellules[i] = new Cellule(i,137);  
    }
  }

//ACCESSEURS

  getCellules()
  {
    return this.cellules;
  }

  getCellule(index : number) : Cellule
  {
    return this.cellules[index];
  }

  getCelluleIndex(index : number)
  {
    if(this.cellules[index].isVide())
      return index;
    else
      return null;
  }

  ajoutCereale(cereale :Cereale, index : number){
    this.cellules[index].ajoutCereale(cereale);
  }

  viderCellule(index : number) : Cereale
  {
    let c = this.getCellule(index).getCereale();
    this.getCellule(index).setCereale(null);
    c.histo += "\nSortie de la cellule numéro : "+index;
    return c;
  }

  testpresenceInsecte(index : number) : boolean
  {
    let presence = false;
    if(!this.getCellule(index).isVide())
      if(this.getCellule(index).getCereale().getImpurete().presenceInsectes)
        presence = true;
    return presence;
  }

}
