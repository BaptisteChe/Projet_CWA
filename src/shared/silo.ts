import { Cellule } from './cellule';

export class Silo
{
  private cellules : Cellule[];
  /*A tester et à ajouter dans le diag de classe*/ 
  private volumecellules : number;

//CONSTRUCTEUR

  constructor(volume : number)
  {
    for(let i = 0; i < 10; i++){
      this.cellules[i] = new Cellule(i,volume);  
    }
    this.volumecellules = volume;
  }

//ACCESSEURS

  getCellules()
  {
    return this.cellules;
  }

  setCellules(cellules : Cellule[])
  {
    this.cellules = cellules;
  }

}
