import { Cereale } from 'src/shared/cereale';
import { BoisseauChargement } from 'src/shared/boisseauchargement';
import { FosseReception } from 'src/shared/fossereception';
import { LocalDeCommande } from 'src/shared/localdecommande';
import { NettoyeurSeparateur } from 'src/shared/nettoyeurseparateur';
import { Silo } from 'src/shared/silo';
import { TremieVrac } from 'src/shared/tremievrac';
import { Camion } from './camion';

export class SARLBeuzelin{
  private silo : Silo;
  private tremievrac : TremieVrac;
  private nettoyeurSeparateur : NettoyeurSeparateur;
  private boisseauxChargement : BoisseauChargement[] = [];
  private fossesReception : FosseReception[] = [];
  private camion : Camion[] = [];
  private static instance : SARLBeuzelin;

//CONSTRUCTEUR

  private constructor(){
    this.InitCamion();
    this.InitFosseReception();
    this.tremievrac = new TremieVrac();
    this.nettoyeurSeparateur = new NettoyeurSeparateur();

    this.silo = new Silo(137); //137 m3 pour chaque volume
    this.InitBoisseau();
    this.simulation();
  }

  static getInstance():SARLBeuzelin{
    if(!SARLBeuzelin.instance)
    {
      SARLBeuzelin.instance = new SARLBeuzelin();
    }
    return SARLBeuzelin.instance;
  }

//FONCTIONS

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  public InitCamion(){
    for(let i = 0; i < 2; i++)
      this.camion[i] = new Camion();
  }

  InitFosseReception(){
    for(let i = 0; i < 2; i++)
      this.fossesReception[i] = new FosseReception();
  }

  InitBoisseau(){
    for(let i = 0; i < 3; i++)
      this.boisseauxChargement[i] = new BoisseauChargement();
  }

  checkTempCellule(): number[][]{
    let temperatures: number[][] = [[]];
    let temp: number[] = [];

    this.silo.getCellules().forEach(cel => {
      cel.getSondes().forEach(sonde => {
        temp.push(sonde.getTemperature());
        if(sonde.getTemperature() >= 15){
          cel.setVentilation(true);
        }else
          cel.setVentilation(false);
      });
      temperatures.push(temp);
    });
    return temperatures;
  }

  getCelluleByNum(numCellule){
    for(let i=0; i<=this.silo.getCellules().length;i++){
      if(this.silo.getCellules()[i].getNumeroCellule() == numCellule){
        return this.silo.getCellules()[i].getNumeroCellule();
      }else{
        return null;
      }
    }
  }

  async reception(){
    for(let i = 0; i < 2; i++)
    {
      if(this.camion[i].isVide())
      {
        this.camion[i].generationCereale();
        this.camion[i].pesee();
        this.camion[i].echantillonnage();

        for(let j = 0; j < 2; j++)
          if(this.fossesReception[j].isVide())
          {
            if(!this.camion[i].isVide())
              this.fossesReception[j].reception(this.camion[i].vidercamion());
          }
      }
    }
    await this.delay(60000);
  }

  async traitement(){
    for(let i = 0; i < 2; i++){
      if(!this.fossesReception[i].isVide())
        if(this.tremievrac.isVide())
        {
          this.tremievrac.remplirTremie(this.fossesReception[i].expedition());
          this.tremievrac.triage();
        }
    }
  }

  async nettoyage(){
    if(this.nettoyeurSeparateur.isVide())
    {  
      this.nettoyeurSeparateur.remplirNettoyeurSeparateur(this.tremievrac.viderTremie());
      this.nettoyeurSeparateur.nettoyer();
    }
  }

  async stockage(){
    for(let i = 0; i < 10; i++){
      let numcell = this.silo.getCelluleIndex(i);
      if(numcell != null)
        if(!this.nettoyeurSeparateur.isVide())
          this.silo.ajoutCereale(this.nettoyeurSeparateur.viderNettoyeur(), i);
    }
  }

  async preparationExpedition(){
    for(let i = 0; i < 10; i++)
      if(!this.silo.getCellule(i).isVide())
        if(!this.silo.testpresenceInsecte(i))
          if(this.silo.getCellule(i).getCereale().temperature <= 15)

            for(let j = 0; j < 3; j++)
              if(this.boisseauxChargement[j].isVide())
                if(!this.silo.getCellule(i).isVide())
                  this.boisseauxChargement[j].setCereale(this.silo.viderCellule(i));
  }

  async expedition(){

  }

  injectionProduitInsecticide(){
    for( let i = 0; i < 10; i++ ){
      if(!this.silo.getCellule(i).isVide())
        if(this.silo.testpresenceInsecte(i))
          this.silo.getCellule(i).insecticide();
    }
  }

  async simulation(){
    while(true){
      this.reception();
      this.traitement();
      this.nettoyage();
      this.stockage();
      this.preparationExpedition();
      await this.delay(5000);
    }
  }

}