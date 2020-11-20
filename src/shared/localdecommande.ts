export class LocalDeCommande
{
  private temperatureParCellule : number[];
  private ventilationActive : boolean;

//CONSTRUCTEUR

  constructor()
  {
    //50 cases dans le tableau de température
   for(let i = 0; i < 50; i++){
     this.temperatureParCellule[i] = 0;
   }
  }

//ACCESSEURS

  getTemperatureParCellule()
  {
    return this.temperatureParCellule;
  }

  setTemperatureParCellule( temperatureParCellule : number[])
  {
    this.temperatureParCellule = temperatureParCellule;
  }

  getVentilationActive()
  {
    return this.ventilationActive;
  }

  setVentilationActive(ventilationActive : boolean)
  {
    this.ventilationActive = ventilationActive;
  }

//FONCTIONS

  activerVentilation()
  {

  }
}
