import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PokemonService } from '../servicios/pokemon.service';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent {
  itemsPasatiempo!: any[];    
  mayor:boolean = true;  
    
  data:any = {};
  edad!:number;
  
  listaPokemons: any = {};  
  images: Array<any> = new Array()    
  imagesSelected: Array<any> = new Array()    

  imagesConfirmados: Array<any> = new Array()    

  dataForm = this.fb.group({
    nombre: [null, [Validators.required]],
    pasatiempo: [null, [Validators.required]],
    cumpleAnios: [null, [Validators.required]],
    documento: [null, [Validators.required, Validators.pattern(/^\d{8}-\d$/)]],

  });


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private pokeSrv: PokemonService
    ) {}

  ngOnInit() {    
    this.itemsPasatiempo = this.pasatiempos();
    //this.enviarData('','','','');

     
  }

  
  receiveDataFromChild(data: any) {        
    this.data.imagenUrl = data.imagenUrl;
  }   

  
  enviarDatosPerfil(nombre:string, pasatiempo:string,    
    cumpleanios:any,documento:string
    ){

      Swal.fire(
        {
          title: 'Por favor espere..',
          html: '...',
          imageUrl: 'assets/loadingPokebola.gif',
          imageAlt: 'Custom image',
          allowOutsideClick: false,
          showConfirmButton:false,
          customClass: {
            container: 'fullscreen-alert'
        }
        }
      )

      setTimeout(() => { Swal.close();}, 1000); // simulando loading

    //console.log("data corecta" )    

    this.data.nombre= nombre;
    this.data.pasatiempo =pasatiempo 
    this.data.cumpleanios=cumpleanios
    this.data.edad = this.edad;
    this.data.documento = documento; 
/*
    this.data.nombre= "Emmanuel Santgiago";
    this.data.pasatiempo ="jugar  y bailar ";
    this.data.cumpleanios= new Date();
    this.data.edad = 18;
    this.data.documento = "102030-6"
    */
    this.data.etapa=2;        

    this.cargarTados();
        
  }

  guardarPokemons(){    
    this.data.etapa = 3;        
  }

  onfechaCambiada(event: any ){
    this.edad = this.calcularEdad(event.value);    
    if(this.edad>=18){
      console.log('es mayor');
      this.mayor = true;

      const documentoControl = this.dataForm.get('documento') as FormControl;
      documentoControl.setValidators([Validators.required, Validators.pattern(/^\d{8}-\d$/)]);
      documentoControl.updateValueAndValidity();

    }else        
    {console.log('es menor');        
    const documentoControl = this.dataForm.get('documento') as FormControl;
    documentoControl.setValidators([Validators.required]);
    documentoControl.updateValueAndValidity();
    this.mayor = false;
    }
  }


  calcularEdad(fechaNac: Date){

    let hoy = new Date();        
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    const dia = hoy.getDate() - fechaNac.getDate();

  
  if (mes < 0 || (mes === 0 && dia <0)) {        
    return edad - 1;
  }  
  return edad;
  }

   


  /* Etapa 2 */
  pokemonBuscar:String = "";;
  buscarFiltro(){
    if (this.pokemonBuscar.length>0){

    
    this.images.length = 0;
    this.pokeSrv.getPokemonByIdOrName(this.pokemonBuscar.toLocaleLowerCase()).subscribe(
      det =>{
        this.images.push({url:det.sprites.front_default ,nombre:det.name  ,  selected: false , stats:det.stats})
      }
    ) 
    }
    else {
      this.cargarTados();

    }

  }

  cargarTados(){
    this.images = new Array()    
    
    this.pokeSrv.getPokemons().subscribe(
      resp=>{
        this.listaPokemons = resp;                         
        this.listaPokemons.results.forEach(
          (poke: { url: string, name:string; }) => {  
            this.pokeSrv.getPokemonByUrl(poke.url).subscribe(
              det=>{                
                this.images.push({url:det.sprites.front_default ,nombre:poke.name  ,  selected: false , stats:det.stats})
              }
            ) 
          }
        )         
        }
    ); 


  }
  
  


  toggleImageSelection(image: any): void {        
    if (this.imagesSelected.length>=3  && !image.selected ) {       
      return;
    }
    else if (!image.selected){      
      image.selected = !image.selected;
      this.imagesSelected.push(image);
    }    
    else {      
      let index = this.imagesSelected.findIndex(i=> i.nombre === image.nombre );      
      this.imagesSelected.splice(index, 1);      
      image.selected = !image.selected;
    }    
    //console.log(this.imagesSelected.length)    

  }



  pasatiempos() { 
    return [
    { nombre: "Jugar Futbol" },
    { nombre: "Jugar Basquet" } , 
    { nombre: "Jugar Tenis" },  
    { nombre: "Jugar Voleibol" }  
  ]  
  }


} 