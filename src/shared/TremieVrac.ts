export class TremieVrac
{
  private bourrage : Boolean;
  private cerealesATraiter : Array<Cereale>;

//CONSTRUCTEUR

  constructor(/*parametres*/)
  {

  }

//ACCESSEURS

  getBourrage()
  {
    return this.bourrage;
  }

  setBourrage(Boolean bourrage)
  {
    this.bourrage = bourrage;
  }

  getCerealesATraiter()
  {
    return this.cerealesATraiter;
  }

  setCeralesATraiter(Array<Cereale> cerealesATraiter)
  {
    this.cerealesATraiter = cerealesATraiter;
  }

//FONCTIONS

  pesee(Cereale cereale)
  {

  }

  echantillonnage(Cereale cereale)
  {

  }

  triage(Cereale cereale)
  {

  }

  bourrageAlarme()
  {

  }
}
