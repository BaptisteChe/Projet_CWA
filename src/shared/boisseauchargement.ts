import { Cereale } from './cereale';

export class BoisseauChargement
{
  private cereale : Cereale;

//CONSTRUCTEUR

  constructor(cereale : Cereale)
  {
    this.cereale = cereale;
  }

//ACCESSEURS

  getCereale()
  {
    return this.cereale;
  }

  setCereale(cereale : Cereale )
  {
    this.cereale = cereale;
  }

//FONCTIONS

  expedition()
  {

  }
}
