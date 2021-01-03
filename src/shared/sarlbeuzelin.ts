import { Cereale } from 'src/shared/cereale';
import { BoisseauChargement } from 'src/shared/boisseauchargement';
import { FosseReception } from 'src/shared/fossereception';
import { NettoyeurSeparateur } from 'src/shared/nettoyeurseparateur';
import { Silo } from 'src/shared/silo';
import { TremieVrac } from 'src/shared/tremievrac';
import { Camion } from './camion';
import { CausesAlarme, Nom } from './enumeration';
import { ThemePalette } from '@angular/material/core';
import { Alarme } from './alarme';

export class SARLBeuzelin{
  private silo : Silo;
  private tremievrac : TremieVrac;
  private nettoyeurSeparateur : NettoyeurSeparateur;
  private boisseauxChargement : BoisseauChargement[] = [];
  private fossesReception : FosseReception[] = [];
  private camions : Camion[] = [];
  private static instance : SARLBeuzelin;
  private sim : boolean;
  private historiqueCereale : string;

//CONSTRUCTEUR

  private constructor(){
    this.initCamion();
    this.initFosseReception();
    this.tremievrac = new TremieVrac();
    this.nettoyeurSeparateur = new NettoyeurSeparateur();

    this.silo = new Silo(); //137 m3 pour chaque volume
    this.initBoisseau();
    this.historiqueCereale = "";
    this.sim = true;
    this.simulation();
  }

  static getInstance():SARLBeuzelin{
    if(!SARLBeuzelin.instance)
    {
      SARLBeuzelin.instance = new SARLBeuzelin();
    }
    return SARLBeuzelin.instance;
  }

//ACCESSEURS

  getRemplissage(index : number){
    return this.silo.getCellule(index).getPourcentage();
  }

  getSiloCereale(index : number){
    if(!this.silo.getCellule(index).isVide())
      return this.silo.getCellule(index).getCereale();
    else
      return new Cereale(Nom.Rien);
  }

  getSilo(){
    return this.silo;
  }

  getCouleur(index : number) : ThemePalette
  {
    if(this.silo != null)
      if(!this.silo.getCellule(index).isVide()){
        let nom = this.silo.getCellule(index).getCereale().getNom();
        switch(nom){
          case Nom.Ble :
            return 'primary';
          case Nom.Colza :
            return 'accent';
          case Nom.Orge :
            return 'warn';
          case Nom.Pois :
            return 'accent';
          }
      }else{
        return 'warn';
      }
  }

  getCamionCereale(index : number){
    return this.camions[index].getCereale();
  }

  getFosseReception(index : number){
    return this.fossesReception[index].getCereale();
  }

  getTremie(){
    return this.tremievrac;
  }

  getNettoyeur(){
    return this.nettoyeurSeparateur;
  }

  getBoisseau(index : number){
    return this.boisseauxChargement[index];
  }

  getHistoriqueCereale(){
    if(this.historiqueCereale != null)
      return this.historiqueCereale;
  }

//FONCTIONS

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  initCamion(){
    for(let i = 0; i < 2; i++)
      this.camions[i] = new Camion();
  }

  initFosseReception(){
    for(let i = 0; i < 2; i++)
      this.fossesReception[i] = new FosseReception();
  }

  initBoisseau(){
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

  async reception(){
    for(let i = 0; i < 2; i++)
    {
      if(this.camions[i].isVide())
      {
        this.camions[i].generationCereale();
        this.camions[i].pesee();
        this.camions[i].echantillonnage();
        await this.delay(5000);

        for(let j = 0; j < 2; j++)
          if(this.fossesReception[j].isVide())
          {
            if(!this.camions[i].isVide())
              this.fossesReception[j].reception(this.camions[i].vidercamion());
          }
          await this.delay(2000);
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
      await this.delay(20000);
    }
  }

  async nettoyage(){;
    if(this.nettoyeurSeparateur.isVide())
    {  
      this.nettoyeurSeparateur.remplirNettoyeurSeparateur(this.tremievrac.viderTremie());
      this.nettoyeurSeparateur.nettoyer();
      await this.delay(2000);
    }
    await this.delay(20000);
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
    await this.delay(10000);
    for(let i = 0; i < 10; i++){
      if(!this.silo.getCellule(i).isVide())
        if(!this.silo.testpresenceInsecte(i))
          if(this.silo.getCellule(i).getCereale().getTemperature() <= 15)

            for(let j = 0; j < 3; j++)
              if(this.boisseauxChargement[j].isVide())
                if(!this.silo.getCellule(i).isVide())
                {  
                  this.boisseauxChargement[j].setCereale(this.silo.viderCellule(i));
                  await this.delay(10000);
                }
      await this.delay(30000);
    }
  }

  async expedition(){
    for(let i = 0; i < 3; i++){
      if(!this.boisseauxChargement[i].isVide()){
        await this.delay(20000);
          this.historiqueCereale += this.boisseauxChargement[i].expedition().histo;
      }
      await this.delay(30000);
    }
  }

  injectionProduitInsecticide(){
    for( let i = 0; i < 10; i++ ){
      if(!this.silo.getCellule(i).isVide())
        if(this.silo.testpresenceInsecte(i))
          this.silo.getCellule(i).injectionInsecticide();
    }
  }

  async maintenance(alarme : Alarme){
    if(alarme.getCause() == CausesAlarme.bourrageTremieVrac)
    {
      await this.delay(10000);
      this.tremievrac.setBourrage(false);
      this.sim = true;
      this.simulation();
    }else{
      await this.delay(10000);
      this.nettoyeurSeparateur.setBourrage(false);
      this.sim = true;
      this.simulation();
    }
  }

  async simulation(){
    while(this.sim == true){
      this.reception();
      //await this.delay(5000);
      this.traitement();
      if(this.tremievrac.getAlarme().getIsActive())
      {
          this.sim = false;
          alert(this.tremievrac.getAlarme().getCause().toString());
          this.maintenance(this.tremievrac.getAlarme());
      }
      else
      {
        //await this.delay(5000);
        this.nettoyage();
        if(this.nettoyeurSeparateur.getAlarme().getIsActive())
        {  
          this.sim = false;
          alert(this.nettoyeurSeparateur.getAlarme().getCause().toString());
          this.maintenance(this.nettoyeurSeparateur.getAlarme());
        }
        else
        {
          //await this.delay(5000);
          this.stockage();
          //await this.delay(5000);
          this.preparationExpedition();
          //await this.delay(5000);
          this.expedition();
        }
      }
      await this.delay(5000);
    }
  }

}