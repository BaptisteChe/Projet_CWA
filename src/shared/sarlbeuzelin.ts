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

  }

  public static getInstance():SARLBeuzelin{
    if(!SARLBeuzelin.instance)
    {
      SARLBeuzelin.instance = new SARLBeuzelin();
    }
    return SARLBeuzelin.instance;
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

  traitement(){

  }

  nettoyage(){

  }

  ventilation(){

  }

  injectionProduitInsecticide(){

  }
}

