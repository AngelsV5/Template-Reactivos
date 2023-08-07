import { Component } from '@angular/core';


@Component({
  selector: 'app-inf',
  templateUrl: './inf.component.html',
  styleUrls: ['./inf.component.css']
})
export class InfComponent {
  datos={
    cedula: '',
    nombre: '',
    fechaNacimiento: '',
    ciudad:''
  }
  mostrarMensaje = false;

  onSubmit() {
    console.log(this.datos);

    this.mostrarMensaje = true;

  }
  onCancelar() {
    this.datos = {
      cedula: '',
      nombre: '',
      fechaNacimiento: '',
      ciudad: ''
    };
    this.mostrarMensaje = false;
  }

}
