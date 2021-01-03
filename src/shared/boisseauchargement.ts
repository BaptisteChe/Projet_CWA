import { Cereale } from './cereale';
import { Expedition, Nom } from './enumeration';

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
    if(!this.isVide())
      return this.cereale.histo;
    else
      return Nom.Rien.toString();
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
      return false;
    }
  }

//FONCTIONS

  expedition()
  {
      let histo = "---------------------------------------------------\n";
      //alert("Cereale de type : " + this.cereale.nom + "<br> poids : " + this.cereale.masse + "<br> taux d'humidite : " + this.cereale.tauxHumidite + "<br> qualite : " + this.cereale.qualite + "<br> details de l'expedition : " + this.cereale.detailsExpedition());
      this.cereale.histo += "\nCéréale chargée et au départ de : " + this.genererLieuExpedition();
      histo += this.cereale.histo+"\n---------------------------------------------------\n\n";
      this.cereale.histo = histo;
      console.log(this.cereale.histo);
      let c = this.cereale;
      this.cereale = null;
      return c;
  }

  genererLieuExpedition() : Expedition
  {
    let nbr = Math.round(Math.random());
    if(nbr == 0){
      this.cereale.setExpedition(Expedition.seine_Maritime);
    }else
      this.cereale.setExpedition(Expedition.meunerie);

    return this.cereale.getExpedition();
  }
}
