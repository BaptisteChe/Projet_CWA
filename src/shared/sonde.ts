export class Sonde
{
  private temperature : number;

//CONSTRUCTEUR

  constructor(temperature : number)
  {
    this.temperature = temperature;
  }

//ACCESSEURS

  getTemperature()
  {
    return this.temperature;
  }

  setTemperature(temperature : number)
  {
    this.temperature = temperature;
  }
}
