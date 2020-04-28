import { Component, OnInit } from '@angular/core';
import { PuentesService } from '../../services/puentes.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public puentesService: PuentesService) { }

  ngOnInit() {
  }

}
