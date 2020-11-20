import { Cereale } from './cereale';


export class TremieVrac
{
  private bourrage : boolean;
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

  setCeralesATraiter(cerealesATraiter : Cereale[] )
  {
    this.cerealesATraiter = cerealesATraiter;
  }

//FONCTIONS

  pesee(cereale : Cereale)
  {

  }

  echantillonnage(cereale : Cereale )
  {

  }

  triage(cereale : Cereale )
  {

  }

  bourrageAlarme()
  {

  }
}
