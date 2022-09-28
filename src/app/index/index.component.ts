import { Component, OnInit } from '@angular/core';
import { ApiServerService } from '../apis/api-server.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  datos: any;
  nombre: any = "";
  edad: any = "";
  sexo: any = "";
  doc: any = "";

  array = Array();
  personas: any;
  constructor(private service: ApiServerService) { }

  ngOnInit(): void {
    this.service.obtenerDatos().subscribe(data => {
      this.datos = data.results;
      console.log(this.datos)
    });

    let arreglo = window.localStorage.getItem('personas');
    this.personas = arreglo ? JSON.parse(arreglo) : this.personas;
    console.log(this.personas)
  }

  guardarDatos() {
    let arreglo = window.localStorage.getItem('personas');
    this.array = arreglo ? this.array = JSON.parse(arreglo) : this.array = Array();

    let datos = {
      'nombre': this.nombre.toUpperCase(),
      'edad': this.edad,
      'sexo': this.sexo,
      'doc': this.doc
    }

    this.array.push(datos);

    window.localStorage.setItem("personas", JSON.stringify(this.array));
    Swal.fire({
      title: '¡Muy bien!',
      text: 'Los datos fueron agregados correctamente',
      icon: 'success',
      focusConfirm: true,
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();

      } else if (result.dismiss) {
        window.location.reload();
      }
    })
    console.log(arreglo);
  }

}
