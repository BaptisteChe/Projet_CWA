import { Cereale } from './cereale';

export class FosseReception
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
    this.cereale = cereale
  }

//FONCTIONS

  reception(cereale : Cereale ) 
  {

  }

  expedition()
  {

  }

}
