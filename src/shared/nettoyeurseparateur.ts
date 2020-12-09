import { Cereale } from './cereale';

export class NettoyeurSeparateur
{
  private bourrage :  boolean;
  private cerealesATraiter : Cereale[];

//CONSTRUCTEUR

  constructor(cereale : Cereale[])
  {
    this.bourrage = false;
    this.cerealesATraiter = cereale;
  }

//ACCESSEURS

  getBourrage()
  {
    return this.bourrage;
  }

  setBourrage(bourrage : boolean)
  {
    this.bourrage = bourrage;
  }

  getCerealesATraiter()
  {
    return this.cerealesATraiter;
  }

  setCerealesATraiter(cerealesATraiter : Cereale[] )
  {
    this.cerealesATraiter = cerealesATraiter;
  }

//FONCTIONS

  nettoyer(cereale :Cereale )
  {
    cereale.nettoyee = true;
  }

  separer(cereale : Cereale )
  {
      cereale.separee = true;
  }
}
