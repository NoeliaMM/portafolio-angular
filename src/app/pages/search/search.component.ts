import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuentesService } from '../../services/puentes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    public puentesService: PuentesService) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        console.log(params);
        this.puentesService.buscarPuente(params['termino']);
      });
  }

}
