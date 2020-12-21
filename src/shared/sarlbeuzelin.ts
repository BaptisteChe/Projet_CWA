import {Cereale} from 'src/shared/cereale';
import {Alarme} from 'src/shared/alarme';
import {BoisseauChargement} from 'src/shared/boisseauchargement';
import {FosseReception} from 'src/shared/fossereception';
import {LocalDeCommande} from 'src/shared/localdecommande';
import {NettoyeurSeparateur} from 'src/shared/nettoyeurseparateur';
import {Silo} from 'src/shared/silo';
import {TremieVrac} from 'src/shared/tremievrac';
import { Camion } from './camion';

export class SARLBeuzelin{
  private alarme : Alarme;
  private silo : Silo;
  private tremievrac : TremieVrac;
  private nettoyeurSeparateur : NettoyeurSeparateur;
  private boisseauxChargement : BoisseauChargement[];
  private localDeCommande : LocalDeCommande;
  private cereale : Cereale[];
  private fossesReception : FosseReception[];
  private lieuxExpedition : string[];
  private camion : Camion;

//CONSTRUCTEUR

  constructor(){
    this.alarme = null;
    this.silo = new Silo(1500);
    this.tremievrac = new TremieVrac();
  }

//FONCTIONS

  traitement(cereale : Cereale){

  }

  nettoyage(cereale : Cereale){

  }

  ventilation(){

  }

  injectionProduitInsecticide(cereale : Cereale){

  }
}
