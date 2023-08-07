import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inf-reactive',
  templateUrl: './inf-reactive.component.html',
  styleUrls: ['./inf-reactive.component.css']
})

export class InfReactiveComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});
  mostrarMensaje=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);

      this.mostrarMensaje=true;
    }
  }

  onCancelar() {
    this.formulario.reset();
    this.mostrarMensaje=false;
  }

}
