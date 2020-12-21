import { Cereale, Expedition } from './cereale';

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

  isVide():boolean{
    if(this.cereale == null)
      return true;
    else
      return false;
  }

//FONCTIONS

  expedition()
  {
    if(this.isVide()){
      //alert("Cereale de type : " + this.cereale.nom + "<br> poids : " + this.cereale.masse + "<br> taux d'humidite : " + this.cereale.tauxHumidite + "<br> qualite : " + this.cereale.qualite + "<br> details de l'expedition : " + this.cereale.detailsExpedition());
      this.cereale.histo += "Céréale chargée et au départ de : " + this.genererLieuExpedition();
      let c = this.cereale;
      this.cereale = null;
    }else
      exception("Boisseau plein");
  }

  genererLieuExpedition():Expedition{
    let nbr = Math.round(Math.random());
    if(nbr == 0){
      this.cereale.expedition = Expedition.seine_Maritime;
    }else
      this.cereale.expedition = Expedition.meunerie;

    return this.cereale.expedition;
  }
}
