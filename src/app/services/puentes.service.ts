import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PuenteInfo } from '../interfaces/puente.interface';

@Injectable({
  providedIn: 'root'
})
export class PuentesService {

  cargando = true;
  puentes: PuenteInfo[] = [];
  puentesFiltrado: PuenteInfo[] = [];



  constructor(private http: HttpClient) { 

    this.cargarPuentes();
    
  }

  private cargarPuentes(){

    return new Promise((resolve, reject) => {
      this.http.get('https://angularpuentes.firebaseio.com/puentes_idx.json')
      .subscribe((resp: PuenteInfo[]) => {
        this.cargando = false;
        this.puentes = resp;
        resolve();
    });
   

      //Para probar el loading
      // setTimeout(()=>{
      //   this.cargando=false;
      // },2000);
    });
  }

  getPuenteById(id: string){

    return this.http.get(`https://angularpuentes.firebaseio.com/puentes/${id}.json`);

  }

  buscarPuente(termino: string){

    if(this.puentes.length==0){
      //cargar puentes
        this.cargarPuentes().then(()=>{
          //ejecutar despues de cargar los puentes
          //Aplicamos filtro
          this.filtrarPuentes(termino);
        });
    }else{
      this.filtrarPuentes(termino);
    }
    //Quito esto porque creo un metodo  para filtrar aparte filtrarPuentes()
    // this.puentesFiltrado= this.puentes.filter(puente=> {
    //   return true;
    // });

  }

  private filtrarPuentes(termino: string){
      console.log(this.puentes);
      this.puentesFiltrado = [];
      termino = termino.toLocaleLowerCase();

      this.puentes.forEach( puen => {
        const tituloLower = puen.nombre.toLowerCase();
        const tipoLower = puen.tipo.toLowerCase();

        if ( tituloLower.indexOf(termino) >= 0 || tipoLower.indexOf(termino) >= 0) {
          this.puentesFiltrado.push(puen);
        }
      });
  }


}
