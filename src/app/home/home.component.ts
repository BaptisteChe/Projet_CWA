import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
//import { Cereale, CEREALES } from 'src/shared/cereale';
import { Impurete} from 'src/shared/impurete';
import {Cereale, Qualite, Nom} from 'src/shared/cereale';
import {CausesAlarme, alarme} from 'src/shared/alarme';
import {BoisseauChargement} from 'src/shared/boisseauchargement';
import {FosseReception} from 'src/shared/fossereception';
import {LocalDeCommande} from 'src/shared/localdecommande';
import {NettoyeurSeparateur} from 'src/shared/nettoyeurseparateur';
import {SARLBeuzelin} from 'src/shared/sarlbeuzelin';
import {Silo} from 'src/shared/silo';
import {Sonde} from 'src/shared/sonde';
import {TremieVrac} from 'src/shared/tremievrac';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bar1=10;
  bar2=50;
  bar3=90;

  showFiller = false;

  impureter: Impurete = new Impurete(false, false, false, false);
  graine: Cereale = new Cereale(Nom.Orge,30,0.5,Qualite.bonne,this.impureter,false,false,false,false);
  alarme: alarme = new alarme(false,"tout va bien");

  //graine: Cereale = new Cereale("Orge",30,0.5,"De la merde");

  //graines: Cereale[] = CEREALES;
}
