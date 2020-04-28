import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuentesService } from '../../services/puentes.service';
import { PuenteDescripcion } from 'src/app/interfaces/puente-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  puente: PuenteDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
    public puenteService: PuentesService) { }

  ngOnInit() {

    this.route.params
    .subscribe(parametros =>{
      this.puenteService.getPuenteById(parametros['id'])
      .subscribe((puente: PuenteDescripcion) => {
        console.log( puente);
        this.id=parametros['id'];
        this.puente = puente;

      });
    });
  }

}
