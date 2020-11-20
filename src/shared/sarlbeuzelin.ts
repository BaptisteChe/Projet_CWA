import {Cereale, Qualite, Nom} from 'src/shared/cereale';
import {CausesAlarme, alarme} from 'src/shared/alarme';
import {BoisseauChargement} from 'src/shared/boisseauchargement';
import {FosseReception} from 'src/shared/fossereception';
import {LocalDeCommande} from 'src/shared/localdecommande';
import {NettoyeurSeparateur} from 'src/shared/nettoyeurseparateur';
import {Silo} from 'src/shared/silo';
import {TremieVrac} from 'src/shared/tremievrac';

export class SARLBeuzelin{
  private alarme : alarme;
  private silo : Silo;
  private tremievrac : TremieVrac;
  private nettoyeurSeparateur : NettoyeurSeparateur;
  private boisseauxChargement : BoisseauChargement[];
  private localDeCommande : LocalDeCommande;
  private cereale : Cereale[];
  private fossesReception : FosseReception[];
  private lieuxExpedition : string[];

//CONSTRUCTEUR

  constructor(alarme : alarme, silo : Silo, tremie : TremieVrac, net : NettoyeurSeparateur, bois : BoisseauChargement[], locdc : LocalDeCommande, cereale : Cereale[], fosse : FosseReception[], lieux : string[]){
    this.alarme = alarme;
    this.silo = silo;
    this.tremievrac = tremie;
    this.nettoyeurSeparateur = net;
    this.boisseauxChargement = bois;
    this.localDeCommande = locdc;
    this.cereale = cereale;
    this.fossesReception = fosse;
    this.lieuxExpedition = lieux;
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
