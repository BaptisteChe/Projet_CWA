import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Cereale, CEREALES } from 'src/shared/cereale';


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

  graine: Cereale = new Cereale("Orge",30,0.5,"De la merde");

  graines: Cereale[] = CEREALES;
}
