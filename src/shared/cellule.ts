import { Cereale } from './cereale';
import { Sonde } from './sonde';

export class Cellule
{
  private numeroCellule : number;
  private sondes : Sonde[] = [];
  private volume : number;
  private pourcentage : number;
  private cereale : Cereale;
  private ventilation : boolean;

//CONSTRUCTEUR

  constructor(numero : number, volume : number)
  {
    this.numeroCellule = numero;
    this.pourcentage = 0;
    for (let i = 0; i < 5; i++){
      this.sondes[i] = new Sonde(0);
    }
    this.volume = volume;
    this.ventilation = false;
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
    this.setPourcentage(((this.cereale.masse*1000)/120)/this.getVolume() *100);
    console.log(this.getPourcentage());
    this.cereale.histo += "\nCéréale stockée dans la cellule numéro : "+this.getNumeroCellule();
    console.log(this.cereale.histo);
  }

  getPourcentage(){
    if(this.isVide())
      return 0;
    else
      return Math.round(this.pourcentage);
  }
  
  setPourcentage(pourcentage : number){
    this.pourcentage = pourcentage;
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

  injectionInsecticide(){
    console.log("INJECTION");
    this.cereale.impurete.presenceInsectes = false;
    this.cereale.histo += "\nCéréale traitée par insecticides";
  }

  getVentilation()
  {
    return this.ventilation;
  }

  async setVentilation(statut: boolean){
    this.ventilation = statut;
    if(statut = true){
      if(!this.isVide())
      {  
        while(this.cereale.temperature >= 15){
          this.ventilation = true;
          this.cereale.temperature--;
          await this.delay(3000);
        }
        this.majTemperature();
      }
    }else{
      this.ventilation = false;
      this.cereale.temperature++;
      await this.delay(1000);
    }
  }
}
