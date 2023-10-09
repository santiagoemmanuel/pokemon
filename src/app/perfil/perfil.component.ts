import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PokemonService } from '../servicios/pokemon.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  @Input() dataFromParent: any ;
    
  
  
  nombreArchivo!:string;      
  listaPokemons: any = {};
  
    
  constructor() {}

    @Output() sendDataToParent: EventEmitter<any> = new EventEmitter();
    emitData() {      
      this.sendDataToParent.emit(this.dataFromParent);
    }

  ngOnInit() { 
    this.dataFromParent.etapa=1;
  }


  cargarImagen(event: any): void {
    const archivo = event.target.files[0];
    this.nombreArchivo = archivo.name;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      //this.imagenUrl = e.target.result;      
      this.dataFromParent.imagenUrl = e.target.result
      this.emitData();
    };
    reader.readAsDataURL(archivo);
  }

                         

}
