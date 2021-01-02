import { SARLBeuzelin } from "./sarlbeuzelin";

export class LocalDeCommande
{
  private temperatureParCellule : number[] = [];

//CONSTRUCTEUR

  constructor(private manager : SARLBeuzelin)
  {
    //50 cases dans le tableau de température
   for(let i = 0; i < 50; i++){
     this.temperatureParCellule[i] = null;
   }
   this.manager = manager;
   this.simulation();
  }

//FONCTIONS

  delay(ms: number) {
   return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async checkTemperature()
  {
    //parcourir temperature
    //condition sur la temperature
      //si pas bon -> setventilation true
      //si bon --> si active deviens false sinon rien
    //return un boolean de l etat de ventilation
    let temperature = this.manager.checkTempCellule();
    return temperature;
  }

  async injection(){
    this.manager.injectionProduitInsecticide();
  }

  async simulation(){
    while(true){
      await this.delay(10000);
      this.checkTemperature();
      this.injection();
    }
  }
}