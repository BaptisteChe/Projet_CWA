export class LocalDeCommande
{
  private temperatureParCellule : number[];
  private ventilationActive : boolean;

//CONSTRUCTEUR

  constructor()
  {
    //50 cases dans le tableau de température
   for(let i = 0; i < 50; i++){
     this.temperatureParCellule[i] = null;
   }
  }

//ACCESSEURS

  getTemperatureParCellule()//parcour temperature retourne temperature moyenne de chaque cellule
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
    this.setVentilationActive(true);
  }

  checkTemperature()
  {
    //parcourir temperature
    //condition sur la temperature
      //si pas bon -> setventilation true
      //si bon --> si active deviens false sinon rien
    //return un boolean de l etat de ventilation
  }

  injection(){
    
  }
}
