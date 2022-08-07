import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/servicios/comentario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // comentarios : any [] =[
  //   {
  //     nombre: "Wilder",
  //     alias: "@Wilder05",
  //     comentario: "Este framework es increible"
  //   },
  //   {
  //     nombre: "Creador",
  //     alias: "@creador",
  //     comentario: "Gracias por tu comentario"
  //   }
  // ];

  comentarios : any;

  nombre: any;
  comentario: any;

  constructor(private _comentario: ComentarioService) { }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  enviarComentario(){
    console.log(this.nombre);
    console.log(this.comentario);

    let comentarioauxiliar = {
      nombre: this.nombre,
      //alias: `@ ${this.nombre}`,
      comentario: this.comentario
     }

     //this.comentarios.push(comentarioauxiliar);

     this._comentario.guardar(comentarioauxiliar)
     .subscribe( data => {
      console.log("Comentario guardado");
      this.obtenerComentarios();
     })

  }

  eliminarPost(indice: any){
    //this.comentarios.splice(indice,1)
    this._comentario.eliminar(indice)
    .subscribe( data => {
      console.log("Comentario eliminado");
      this.obtenerComentarios();
    } ) 
  }

  obtenerComentarios(){
    this._comentario.obtener()
    .subscribe( data => {
        this.comentarios = data;
        console.log(this.comentarios);
    } )
  }

}
