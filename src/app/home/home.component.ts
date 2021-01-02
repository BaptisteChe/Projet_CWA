import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
//import { Cereale, CEREALES } from 'src/shared/cereale';
import { Impurete} from 'src/shared/impurete';
import {Cereale} from 'src/shared/cereale';
import {Alarme} from 'src/shared/alarme';
import {BoisseauChargement} from 'src/shared/boisseauchargement';
import {FosseReception} from 'src/shared/fossereception';
import {LocalDeCommande} from 'src/shared/localdecommande';
import {NettoyeurSeparateur} from 'src/shared/nettoyeurseparateur';
import {SARLBeuzelin} from 'src/shared/sarlbeuzelin';
import {Silo} from 'src/shared/silo';
import {Sonde} from 'src/shared/sonde';
import {TremieVrac} from 'src/shared/tremievrac';
import { CausesAlarme, Nom } from 'src/shared/enumeration';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  AffiCamion:boolean=false;
  constructor() {
   }

  ngOnInit(): void {
  }

  AffC(){
    this.AffiCamion=true;
  }

  sarl : SARLBeuzelin = SARLBeuzelin.getInstance();
  local : LocalDeCommande = new LocalDeCommande(this.sarl);

  bar1 = 0;
  bar2 = 0;
  bar3 = 0;

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async simulation(){
    while(true){
      this.bar1 = this.sarl.getRemplissage(0);
      await this.delay(30000);
    }
  }
}
