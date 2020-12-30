import { Cereale } from './cereale';
import { Sonde } from './sonde';

export class Cellule
{
  private numeroCellule : number;
  private sondes : Sonde[] = [];
  private volume : number;
  private cereale : Cereale;
  private ventilation : boolean;

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

  isVide(){
    if (this.cereale == null)
      return true;
    else
      return false;
  }

  ajoutCereale(cereale : Cereale){
    this.cereale = cereale;
    this.cereale.histo += "\n Céréale stockée dans la cellule numéro : "+this.getNumeroCellule();
    console.log(this.cereale.histo);
  }

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

  getVentilation(){
    return this.ventilation;
  }
  setVentilation(statut: boolean){
    this.ventilation = statut;
  }
}
