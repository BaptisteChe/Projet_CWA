import { Cellule } from './cellule';
import { Cereale } from './cereale';

export class Silo
{
  private cellules : Cellule[] = [];
  /*A tester et à ajouter dans le diag de classe*/ 
  private volume: number;

//CONSTRUCTEUR

  constructor(volume : number)
  {
    for(let i = 0; i < 10; i++){
      this.cellules[i] = new Cellule(i,volume);  
    }
    this.volume = volume*10;
  }

//ACCESSEURS

  getCellules()
  {
    return this.cellules;
  }

  getCellule(index : number)
  {
    if(this.cellules[index].isVide())
      return index;
    else
      return null;
  }

  ajoutCereale(cereale :Cereale, index : number){
    this.cellules[index].ajoutCereale(cereale);
  }

}
