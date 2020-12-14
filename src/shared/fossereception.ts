import { Cereale } from './cereale';

export class FosseReception
{
  private cereale : Cereale;

//CONSTRUCTEUR

  constructor(cereale : Cereale)
  {
    this.cereale = cereale;
  }

//FONCTIONS

  reception(cereale : Cereale ) 
  {
    this.cereale = cereale;
  }

  expedition()
  {
    return this.cereale;
  }

}
