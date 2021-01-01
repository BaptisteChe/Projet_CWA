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
      this.sondes[i] = new Sonde(0);
    }
    this.volume = volume;
  }

//ACCESSEURS

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  isVide(){
    if (this.cereale == null)
      return true;
    else
      return false;
  }

  majTemperature(){
    if(!this.isVide())
      for (let i = 0; i < 5; i++){
        this.sondes[i].setTemperature(this.cereale.temperature);
      }
  }

  ajoutCereale(cereale : Cereale){
    this.setCereale(cereale);
    this.cereale.histo += "\n Céréale stockée dans la cellule numéro : "+this.getNumeroCellule();
    console.log(this.cereale.histo);
  }

  getCereale() : Cereale
  {
    return this.cereale;
  }

  setCereale(cereale : Cereale){
    this.cereale = cereale;
  }

  getNumeroCellule() : number
  {
    return this.numeroCellule;
  }

  setNumeroCellule(numeroCellule : number)
  {
    this.numeroCellule = numeroCellule;
  }

  getSondes() : Sonde[]
  {
    return this.sondes;
  }

  setSondes(sondes : Sonde[])
  {
    this.sondes = sondes;
  }

  getVolume() : number
  {
    return this.volume;
  }

  setVolume(volume : number)
  {
    this.volume = volume;
  }

  insecticide(){
    console.log("INJECTION");
    this.cereale.impurete.presenceInsectes = false;
    this.cereale.histo += "Céréale traitée par insecticides";
  }

  getVentilation() : boolean
  {
    return this.ventilation;
  }

  async setVentilation(statut: boolean){
    this.ventilation = statut;
    if(statut = true){
      if(!this.isVide())
      {  
        this.cereale.temperature = 14;
        this.majTemperature();
      }
    }else{
      this.cereale.temperature++;
      await this.delay(1000);
    }
  }
}
