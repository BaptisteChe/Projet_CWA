export class Cellule
{
  private numeroCellule : int;
  private sondes : Sonde[5];
  private volume : int;

//CONSTRUCTEUR

  constructor(/*parametres*/)
  {

  }

//ACCESSEURS

  getNumeroCellule()
  {
    return this.numeroCellule;
  }

  setNumeroCellule(int numeroCellule)
  {
    this.numeroCellule = numeroCellule;
  }

  getSondes()
  {
    return this.sondes;
  }

  setSondes(Sonde[] sondes)
  {
    this.sondes = sondes;
  }

  getVolume()
  {
    return this.volume;
  }

  setVolume(int volume)
  {
    this.volume = volume;
  }
}
