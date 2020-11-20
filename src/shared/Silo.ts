export class Silo
{
  private cellules : Cellules[10];
  private hauteurStockage : int;

//CONSTRUCTEUR

  constructor(/*parametres*/)
  {

  }

//ACCESSEURS

  getCellules()
  {
    return this.cellules;
  }

  setCellules(Cellules[] cellules)
  {
    this.cellules = cellules;
  }

  getHauteurStockage()
  {
    return this.hauteurStockage;
  }

  setHauteurStockage(int hauteurStockage)
  {
    this.hauteurStockage = hauteurStockage;
  }
}
