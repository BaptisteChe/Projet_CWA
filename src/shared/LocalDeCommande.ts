export class LocalDeCommande
{
  private temperatureParCellule : double[50];
  private ventilationActive : Boolean;

//CONSTRUCTEUR

  constructor(/*parametres*/)
  {

  }

//ACCESSEURS

  getTemperatureParCellule()
  {
    return this.temperatureParCellule;
  }

  setTemperatureParCellule(double[] temperatureParCellule)
  {
    this.temperatureParCellule = temperatureParCellule;
  }

  getVentilationActive()
  {
    return this.ventilationActive;
  }

  setVentilationActive(Boolean ventilationActive)
  {
    this.ventilationActive = ventilationActive;
  }

//FONCTIONS

  void activerVentilation()
  {

  }
}
