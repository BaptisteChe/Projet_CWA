import { Component, OnInit } from '@angular/core';
import { LocalDeCommande } from 'src/shared/localdecommande';
import { SARLBeuzelin } from 'src/shared/sarlbeuzelin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  AffiCamion:boolean=false;
  sarl : SARLBeuzelin = SARLBeuzelin.getInstance();
  local : LocalDeCommande = new LocalDeCommande(this.sarl);

  constructor() {
   }

  ngOnInit(): void {
  }

  AffC(){
    this.AffiCamion=true;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
