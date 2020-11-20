export class NettoyeurSeparateur
{
  private bourrage :  Boolean;
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

  setCerealesATraiter(Array<Cereale> cerealesATraiter)
  {
    this.cerealesATraiter = cerealesATraiter;
  }

//FONCTIONS

  nettoyer(Cereale cereale)
  {

  }

  separer(Cereale cereale)
  {

  }
}
