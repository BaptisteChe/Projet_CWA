import { SARLBeuzelin } from "./sarlbeuzelin";

/* Objet activant ou non l injection et ou la ventilation dans les cellules */

export class LocalDeCommande
{
//CONSTRUCTEUR

  constructor(private manager : SARLBeuzelin)
  {
    //50 cases dans le tableau de température
   this.manager = manager;
   this.simulation();
  }

//FONCTIONS
  /* Methode retournant un delai d execussion en millisecondes */
  delay(ms: number) 
  {
   return new Promise( resolve => setTimeout(resolve, ms) );
  }

  /* Methode appellant une fonction du Manager SARLBeuzelin */
  async checkTemperature()
  {
    //parcourir temperature
    //condition sur la temperature
      //si pas bon -> setventilation true
      //si bon --> si active deviens false sinon rien
    //return un boolean de l etat de ventilation
    let temperature = this.manager.checkTempCellule();
    return temperature;
  }

  /* Methode appellant l action d injection d insecticide du manager SARLBeuzelin*/
  async injection(){
    this.manager.injectionProduitInsecticide();
  }

  /* Methode Secondaire appellant toutes les fonctions representant la simulation des fonctionnalites du Local de Commande de la SARL BEUZELIN */
  async simulation(){
    //Boucle infinie
    while(true){
       //On met en pause la simulation durant 5 secondes
      await this.delay(5000);
      this.checkTemperature();
      this.injection();
    }
  }
}