import { writeFile } from 'fs';
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
      console.error("Boisseau de chargement non vide")
      return false;
    }
  }

//FONCTIONS

  expedition()
  {
      let histo = "---------------------------------------------------\n";
      //alert("Cereale de type : " + this.cereale.nom + "<br> poids : " + this.cereale.masse + "<br> taux d'humidite : " + this.cereale.tauxHumidite + "<br> qualite : " + this.cereale.qualite + "<br> details de l'expedition : " + this.cereale.detailsExpedition());
      this.cereale.histo += "\n Céréale chargée et au départ de : " + this.genererLieuExpedition();
      histo += this.cereale.histo+"\n---------------------------------------------------\n\n";
      this.cereale.histo = histo;
      console.log(this.cereale.histo);
      this.ecrireJSON(this.cereale);
      
      this.cereale = null;
  }

  ecrireJSON(variable : Cereale){
    
    let val = JSON.parse(JSON.stringify(variable));

    writeFile('historique.json',val,function(erreur){
      if(erreur){
        console.log(erreur);
      }
    });
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
