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
  private boisseauxChargement : BoisseauChargement[];
  private localDeCommande : LocalDeCommande;
  private cereale : Cereale[];
  private fossesReception : FosseReception[];
  private lieuxExpedition : string[];
  private camion : Camion[];
  private static instance : SARLBeuzelin;

//CONSTRUCTEUR

  private constructor(){
    this.InitCamion();
    this.InitFosseReception();
    this.tremievrac = new TremieVrac();
    this.nettoyeurSeparateur = new NettoyeurSeparateur();

    this.silo = new Silo(137); //137 m3 pour chaque volume
    this.InitBoisseau();
  }

  public static getInstance():SARLBeuzelin{
    if(!SARLBeuzelin.instance)
    {
      SARLBeuzelin.instance = new SARLBeuzelin();
    }
    return SARLBeuzelin.instance;
  }

  checkTempCellule(): number[][]{
    let temperatures: number[][];
    let temp: number[];
    this.silo.getCellules().forEach(cel => {
      cel.getSondes().forEach(sonde => {
        temp.push(sonde.getTemperature());
        if(sonde.getTemperature() >= 30){
          cel.setVentilation(true);
        }
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

//FONCTIONS
  InitCamion(){
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

  reception(){
    for(let i = 0; i < 2; i++)
    {
      this.camion[i].generationCereale();
      this.camion[i].pesee();
      this.camion[i].echantillonnage();
      this.fossesReception[i].reception(this.camion[i].vidercamion());
    }
  }

  traitement(){

  }

  nettoyage(){

  }

  stockage(){

  }

  ventilation(){

  }

  injectionProduitInsecticide(){

  }

  simulation(){

  }

}

