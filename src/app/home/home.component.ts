import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
//import { Cereale, CEREALES } from 'src/shared/cereale';
import { Impurete} from 'src/shared/Impurete';
import {Cereale, Qualite, Nom} from 'src/shared/cereale';
import {CausesAlarme, alarme} from 'src/shared/Alarme';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showFiller = false;

  impureter: Impurete = new Impurete(false, false, false, false);
  graine: Cereale = new Cereale("Orge",30,0.5,"mediocre",this.impureter,false,false,false,false);
  alarme: alarme = new alarme(false,"tout va bien");

  //graine: Cereale = new Cereale("Orge",30,0.5,"De la merde");

  //graines: Cereale[] = CEREALES;
}
