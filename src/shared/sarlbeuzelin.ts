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

/*
 * Singleton SARLBeuzelin est le manager de nos objets. C est lui qui permet la bonne communication 
 * entre chaque objet qu'il possede. Cette classe represente la SARL BEUZELIN et son fonctionnement.
*/ 

export class SARLBeuzelin{

//VARIABLES 

  private silo : Silo;
  private tremievrac : TremieVrac;
  private nettoyeurSeparateur : NettoyeurSeparateur;
  private boisseauxChargement : BoisseauChargement[];
  private fossesReception : FosseReception[];
  private camions : Camion[];
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

//MISE EN PLACE DU SINGLETON

  static getInstance():SARLBeuzelin{
    if(!SARLBeuzelin.instance)
    {
      SARLBeuzelin.instance = new SARLBeuzelin();
    }
    return SARLBeuzelin.instance;
  }

//ACCESSEURS

  /* Retourne le niveau de remplissage d une cellule */
  getRemplissage(index : number){
    return this.silo.getCellule(index).getPourcentage();
  }

  /* Retourne une cereale stockee d une Cellule */ 
  getSiloCereale(index : number){
    if(!this.silo.getCellule(index).isVide())
      return this.silo.getCellule(index).getCereale();
    else
      return new Cereale(Nom.Rien);
  }

  /* Retourne le Silo */
  getSilo(){
    return this.silo;
  }

  /* Retourne une couleur bien precise selon le nom de la cereale recuperee dans une cellule */
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

  /* Retourne la cereale contenu dans un camion */
  getCamionCereale(index : number){
    return this.camions[index].getCereale();
  }

  /* Retourne la cereale d'une fosse de reception */
  getFosseReception(index : number){
    return this.fossesReception[index].getCereale();
  }

  /* Retourne la Tremie */
  getTremie(){
    return this.tremievrac;
  }

  /* Retourne le Nettoyeur*/
  getNettoyeur(){
    return this.nettoyeurSeparateur;
  }

  /* Retourne un des Boisseaux de chargement */
  getBoisseau(index : number){
    return this.boisseauxChargement[index];
  }

  /* Retourne la variable historique */
  getHistoriqueCereale(){
    if(this.historiqueCereale != null)
      return this.historiqueCereale;
  }

//FONCTIONS

  /* Retourne un temps d'attente en Millisecondes */
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  /* Initialise la liste de camions a 2 camions */
  initCamion(){
    this.camions = [];
    for(let i = 0; i < 2; i++)
      this.camions[i] = new Camion();
  }

  /* Initialise la liste de fosses de reception a 2 fosses de reception */
  initFosseReception(){
    this.fossesReception = [];
    for(let i = 0; i < 2; i++)
      this.fossesReception[i] = new FosseReception();
  }

  /* Initialise la lise de boisseaux de chargement a 3 boisseaux de chargement */
  initBoisseau(){
    this.boisseauxChargement = [];
    for(let i = 0; i < 3; i++)
      this.boisseauxChargement[i] = new BoisseauChargement();
  }

//METHODE UTILISEES PAR LA SIMULATION DU LOCAL DE COMMANDE

  /* Verifie la temperature de chaque sonde de chaque cellule afin d activer ou non la ventilation de la cellule */
  checkTempCellule(): number[][]{
    let temperatures: number[][] = [[]];
    let temp: number[] = [];

    this.silo.getCellules().forEach(cel => {
      cel.getSondes().forEach(sonde => {
        temp.push(sonde.getTemperature());
        if(sonde.getTemperature() >= 15){
          if(cel.getVentilation() == false)
            cel.setVentilation(true);
        }else
          cel.setVentilation(false);
      });
      temperatures.push(temp);
    });
    return temperatures;
  }

  /* Verifie la pressence d insectes dans les cellules */
  injectionProduitInsecticide()
  {
    //On parcourt la liste des cellules du Silo
    for( let i = 0; i < this.silo.getCellules().length; i++ ){
      //Verifie si la cellule n est pas vide
      if(!this.silo.getCellule(i).isVide())
        //Verifie si le silo compte la presence d insectes dans la cellule
        if(this.silo.testpresenceInsecte(i))
          this.silo.getCellule(i).injectionInsecticide();
    }
  }

//SIMULATION 
  /* Les diverses fonctions qui suivent sont async afin de pouvoir synchroniser chaque processus issu des fonctionnalites de la SARL BEUZELIN durant la simulation. */

  /* Methode demandant aux camions de generer, si possible, une nouvelle cereale et de vider, si possible, son contenu dans une des fosses de reception */
  async reception(){
    //On parcourt la liste de camions
    for(let i = 0; i < 2; i++)
    {
      //Verifie si le camion est vide
      if(this.camions[i].isVide())
      {
        //On genere la cereale et ses attributs
        this.camions[i].generationCereale();
        this.camions[i].pesee();
        this.camions[i].echantillonnage();
        //On met en pause la methode durant 5 secondes pour chaque generation
        await this.delay(5000);
      }

      //On parcourt la liste de fosses de reception
      for(let j = 0; j < 2; j++)
        //Verifie si la fosse est vide
        if(this.fossesReception[j].isVide())
        {
          //Verifie si le camion n'est pas vide 
          if(!this.camions[i].isVide())
            //Vide le contenu du camion dans la fosse de reception
            this.fossesReception[j].reception(this.camions[i].vidercamion());
        }
      //On met en pause la méthode durant 20 secondes pour chaque parcours de la liste de camions
      await this.delay(20000);
    }
    //On met en pause la méthode a la fin de son execution
    await this.delay(5000);
  }

  /* Methode demandant aux fosses, si possible, de se vider dans la Tremie */
  async traitement(){
    //On parcourt la liste des fosses de reception
    for(let i = 0; i < 2; i++){
      //Verifie si la fosse n est pas vide
      if(!this.fossesReception[i].isVide())
        //Verifie si la tremie est vide
        if(this.tremievrac.isVide())
        {
          //On vide la fosse dans la tremie
          this.tremievrac.remplirTremie(this.fossesReception[i].expedition());
          //On appel le traitement sur le lot de cereales dans la tremie
          this.tremievrac.triage();
        }
    }
  }

  /* Methode demandant a la Tremie, si possible, de se vider dans le Nettoyeur */
  async nettoyage(){
    //Verifie si le nettoyeur est vide
    if(this.nettoyeurSeparateur.isVide())
    { 
      //Verifie si la tremie n est pas vide
      if(!this.tremievrac.isVide()){
        //Verifie si la tremie n est pas en bourrage
        if(!this.tremievrac.getBourrage())
        {
          //On vide la tremie dans le nettoyeur
          this.nettoyeurSeparateur.remplirNettoyeurSeparateur(this.tremievrac.viderTremie());
          //On appel le traitement sur le lot de cereales dans le nettoyeur
          this.nettoyeurSeparateur.nettoyer();
        }
      }
    }
  }

  /* Methode cherchant a stocker, si possible, le contenu du Nettoyeur dans une Cellule du Silo */
  async stockage(){
    //On parcourt la liste des cellules du Silo
    for(let i = 0; i < this.silo.getCellules().length; i++){
      //On affecte a la variable la cellule 
      let numcell = this.silo.getCelluleIndex(i);
      //Verifie si la variable n est pas null
      if(numcell != null)
        //Verifie si le nettoyeur n est pas vide
        if(!this.nettoyeurSeparateur.isVide())
        {
          //Verifie si le nettoyeur n est pas en bourrage
          if(!this.nettoyeurSeparateur.getBourrage())
            //On vide le nettoyeur dans le silo qui ajoute son sontenu dans une cellule
            this.silo.ajoutCereale(this.nettoyeurSeparateur.viderNettoyeur(), i);
        }
    }
  }

  /* Methode passant le contenu d une cellule dans un des boisseaux de chargement si possible */
  async preparationExpedition(){
    //On met en pause la methode durant 10 secondes 
    await this.delay(10000);
    //On parcourt la liste des cellules du Silo
    for(let i = 0; i < this.silo.getCellules().length; i++){
      //Verifie si la cellule n est pas vide
      if(!this.silo.getCellule(i).isVide())
        //Verifie si dans le silo il n y a pas de presence d insectes
        if(!this.silo.testpresenceInsecte(i))
          //Verifie si dans la cellule, la temperature est inferieur ou egale a 15
          if(this.silo.getCellule(i).getCereale().getTemperature() <= 15)
            //On parcourt la liste des boisseaux de chargement
            for(let j = 0; j < 3; j++)
              //Verifie si le boisseau est vide
              if(this.boisseauxChargement[j].isVide())
                //Verifie si la cellule n est pas vide
                if(!this.silo.getCellule(i).isVide())
                {  
                  //On vide la cellule dans le boisseau
                  this.boisseauxChargement[j].setCereale(this.silo.viderCellule(i));
                  //On met en pause la methode durant 10 secondes afin de laisser le temps au boisseau de bien recuperer le lot de cereales
                  await this.delay(10000);
                }
      //On met en pause le traitement de la methode durant 30 secondes
      await this.delay(10000);
    }
  }

  /* Methode vidant les boisseaux de chargement et recuperant l historique du lot de cereales dans une variable globale */
  async expedition(){
    //On parcourt la liste des boisseaux de chargement
    for(let i = 0; i < 3; i++){
      //Verifie si le boisseau n est pas vide
      if(!this.boisseauxChargement[i].isVide()){
        //On met en pause la methode durant 20 secondes avant de vider le lot de cereales
        await this.delay(20000);
        //On vide la cereale du boisseau et on recupere l historique de la cereale
        this.historiqueCereale += this.boisseauxChargement[i].expedition().histo;
      }
      //On met en pause le parcours de la liste durant 30 secondes
      await this.delay(30000);
    }
  }

  /* Methode permettant de remettre la simulation en action lors d un bourrage de la Tremie et ou du Nettoyeur*/
  async maintenance(alarme : Alarme){
    //Verifie si la variable passee en parametre est un bourrage de la tremie
    if(alarme.getCause() == CausesAlarme.bourrageTremieVrac)
    {
      //On met en pause la methode de maintenance pour simuler le temps de maintenance de la machine
      await this.delay(10000);
      //On passe la variable du bourrage de la tremie a false
      this.tremievrac.setBourrage(false);
      //Verifie si la variable de simulation n est pas active
      if(this.sim == false){
        //On passe la variable a active
        this.sim = true;
        console.log("simulation relance");
        //Verifie si le nettoyeur n est pas en bourrage
        if(!this.nettoyeurSeparateur.getBourrage())
          //On relance la simulation
          this.simulation();
      }
    }else{ //Sinon, si la variable passee en parametre est un bourrage de la tremie
      //On met en pause la methode de maintenance pour simuler le temps de maintenance de la machine
      await this.delay(10000);
      //On passe la variable du bourrage du nettoyeur a false
      this.nettoyeurSeparateur.setBourrage(false);
      //Verifie si la variable de simulation n est pas active
      if(this.sim == false){
        //On passe la variable a active
        this.sim = true;
        console.log("simulation relance");
        //Verifie si la tremie n est pas en bourrage
        if(!this.tremievrac.getBourrage())
          //On relance la simulation
          this.simulation();
      }
    }
  }

  /* Methode Globale appellant toutes les fonctions representant la simulation des fonctionnalites de la SARL BEUZELIN */
  async simulation(){
    //Boucle vérifiant si la variable de simulation est active
    while(this.sim){

      this.reception(); 
      this.traitement();

      //Verifie si l alarme de la tremie est activee
      if(this.tremievrac.getAlarme().getIsActive())
      {
          //On passe la variable de simulation en n est pas active
          this.sim = false;
          console.log("simulation pause");
          //On appel la maintenance
          this.maintenance(this.tremievrac.getAlarme());
      }
      else
      {
        this.nettoyage();

        //Verifie si l alarme du nettoyeur est activee
        if(this.nettoyeurSeparateur.getAlarme().getIsActive())
        {  
          //On passe la variable de simulation en n est pas active
          this.sim = false;
          console.log("simulation pause");
          //On appel la maintenance
          this.maintenance(this.nettoyeurSeparateur.getAlarme());
        }
        else
        {
          this.stockage();
          this.preparationExpedition();
          this.expedition();
        }
      }
      //On met en pause la simulation
      await this.delay(5000);
    }
  }

}