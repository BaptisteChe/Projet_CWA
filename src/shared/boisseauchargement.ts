import { Cereale } from './cereale';

export class BoisseauChargement
{
  private cereale : Cereale;

//CONSTRUCTEUR

  constructor(cereale : Cereale)
  {
    this.cereale = cereale;
  }

//ACCESSEURS

  getCereale()
  {
    return this.cereale;
  }

  setCereale(cereale : Cereale )
  {
    this.cereale = cereale;
  }

//FONCTIONS

  expedition()
  {
    alert("Cereale de type : " + this.cereale.nom + "<br> poid : " + this.cereale.masse + "<br> taux d'humidite : " + this.cereale.tauxHumidite + "<br> qualite : " + this.cereale.qualite + "<br> details de l expedition : " + this.cereale.detailsExpedition());
  }
}
