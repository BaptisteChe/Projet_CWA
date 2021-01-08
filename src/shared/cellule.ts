import { Cereale } from './cereale';
import { Nom } from './enumeration';
import { Sonde } from './sonde';

export class Cellule
{
//VARIABLES
  private numeroCellule : number;
  private sondes : Sonde[];
  private volume : number;
  private pourcentage : number;
  private cereale : Cereale;
  private ventilation : boolean;

//CONSTRUCTEUR

  constructor(numero : number, volume : number)
  {
    this.numeroCellule = numero;
    this.sondes = [];
    for (let i = 0; i < 5; i++){
      this.sondes[i] = new Sonde(0);
    }
    this.volume = volume;
    this.pourcentage = 0;
    this.cereale = null;
    this.ventilation = false;
  }

//ACCESSEURS
  /* Methode renvoyant un booleen informant si la cellule est vide */
  isVide() : boolean
  {
    //Verifie si la variable cereale est null
    if (this.cereale == null)
      return true;
    else
      return false;
  }

  getPourcentage() : number
  {
    if(this.isVide())
      return 0;
    else
      return Math.round(this.pourcentage);
  }
  
  setPourcentage(pourcentage : number){
    this.pourcentage = pourcentage;
  }
  
  getCereale(){
    //Verifie si la cellule est vide
    if(this.isVide())
      //Retourne une instance non parametree de Cereale
      return new Cereale(Nom.Rien);
    else
      return this.cereale;
  }

  setCereale(cereale : Cereale){
    this.cereale = cereale;
  }

  getNumeroCellule() : number
  {
    return this.numeroCellule;
  }

  setNumeroCellule(numeroCellule : number)
  {
    this.numeroCellule = numeroCellule;
  }

  getSondes() : Sonde[]
  {
    return this.sondes;
  }

  setSondes(sondes : Sonde[])
  {
    this.sondes = sondes;
  }

  getVolume() : number
  {
    return this.volume;
  }

  setVolume(volume : number)
  {
    this.volume = volume;
  }

  getVentilation()
  {
    return this.ventilation;
  }

  /* Setter affectant au booleen ventilation le parametre statut */
  async setVentilation(statut: boolean)
  {
    //Verifie si le parametre statut est a true
    if(statut == true){
      //Verifie si la cellule n est pas vide
      if(!this.isVide())
      {  
        //Affecte le parametre a la variable ventilation
        this.ventilation = true;
        //Variable recuperant la temperature de la cereale
        let temp = this.cereale.getTemperature();
        //Tant que la temperature est superieur ou egale a 15
        while(temp >= 15){
          //Verifie si la cellule n est pas vide
          if(!this.isVide()){
            //On diminue la temperature de la cereale et donc des sondes de la cellule
            this.cereale.setTemperature(this.cereale.getTemperature()-1);
            this.majTemperature();
            temp--;
          }
          //On attends une seconde avant de faire rebaisser la temperature
          await this.delay(1000);
        }
        //On passe la ventilation a false pour ne pas la laisser activer
        this.ventilation = false;
      }
    }
  }

//FONCTIONS
  /* Methode mettant a jour les temperatures des sondes par rapport a la temperature de la variable cereale */
  majTemperature()
  {
    //Verifie si la cellule n est pas vide
    if(!this.isVide())
      //Parcours les sondes de la cellule
      for (let i = 0; i < this.sondes.length; i++){
        //Affecte la temperature de la cereale aux sondes
        this.sondes[i].setTemperature(this.cereale.getTemperature());
      }
  }

  /* Methode ajoutant une instance de Cereale dans la cellule, met a jour les temperatures des sondes, la variable histo de cette instance de Cereale et la variable de Pourcentage de remplissage de la cellule  */
  ajoutCereale(cereale : Cereale)
  {
    this.setCereale(cereale);
    this.setPourcentage(((this.cereale.getMasse()*1000)/120)/this.getVolume() *100);
    this.majTemperature();
    //Ajout de l information a l histo de la Cereale
    this.cereale.histo += "\nCéréale stockée dans la cellule numéro : "+this.getNumeroCellule();
  }

  /* Methode retournant un delai d execussion en millisecondes */
  delay(ms: number) 
  {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  /* Methode affectant aux Impuretes de la Cereale false pour la presence d insectes */
  injectionInsecticide()
  {
    this.cereale.getImpurete().setInsectes(false);
    //Ajout de l information a l histo de la Cereale
    this.cereale.histo += "\nCéréale traitée par insecticides";
  }
}
