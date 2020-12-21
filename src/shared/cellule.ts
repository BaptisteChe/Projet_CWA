import { Sonde } from './sonde';

export class Cellule
{
  private numeroCellule : number;
  private sondes : Sonde[];
  private volume : number;
  private cereale : Cereale;

//CONSTRUCTEUR

  constructor(numero : number, volume : number)
  {
    this.numeroCellule = numero;
    for (let i = 0; i < 5; i++){
      this.sondes[i] = new Sonde(null);
    }
    this.volume = volume;
  }

//ACCESSEURS

  getNumeroCellule()
  {
    return this.numeroCellule;
  }

  setNumeroCellule(numeroCellule : number)
  {
    this.numeroCellule = numeroCellule;
  }

  getSondes()
  {
    return this.sondes;
  }

  setSondes(sondes : Sonde[])
  {
    this.sondes = sondes;
  }

  getVolume()
  {
    return this.volume;
  }

  setVolume(volume : number)
  {
    this.volume = volume;
  }

  insecticide(){
    this.cereale.impurete.presenceInsectes = false;
    this.cereale.histo += "Céréale traitée par insecticides";
  }
}
