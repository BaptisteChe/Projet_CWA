import { Cereale } from './cereale';
import { Expedition } from './enumeration';


export class BoisseauChargement
{
  private cereale : Cereale;

//CONSTRUCTEUR

  constructor()
  {
    this.cereale = null;
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

  isVide()
  {
    if(this.cereale == null)
      return true;
    else{
      console.error("Boisseau de chargement non vide")
      return false;
    }
  }

//FONCTIONS

  expedition()
  {
      //alert("Cereale de type : " + this.cereale.nom + "<br> poids : " + this.cereale.masse + "<br> taux d'humidite : " + this.cereale.tauxHumidite + "<br> qualite : " + this.cereale.qualite + "<br> details de l'expedition : " + this.cereale.detailsExpedition());
      this.cereale.histo += "\n Céréale chargée et au départ de : " + this.genererLieuExpedition();
      console.log(this.cereale.histo);
      let c = this.cereale;
      this.cereale = null;
  }

  genererLieuExpedition() : Expedition
  {
    let nbr = Math.round(Math.random());
    if(nbr == 0){
      this.cereale.expedition = Expedition.seine_Maritime;
    }else
      this.cereale.expedition = Expedition.meunerie;

    return this.cereale.expedition;
  }
}
