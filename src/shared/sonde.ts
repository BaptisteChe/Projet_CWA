
/* Sonde d une instance de Cellule renvoyant et stockant la temperature d une instance de Cereale */

export class Sonde
{
//VARIABLES
  private temperature : number;

//CONSTRUCTEUR

  constructor(temperature : number)
  {
    this.temperature = temperature;
  }

//ACCESSEURS

  getTemperature() : number
  {
    return this.temperature;
  }

  setTemperature(temperature : number)
  {
    this.temperature = temperature;
  }
}
