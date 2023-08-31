import { Component,OnInit } from '@angular/core';
//Importamos nuestra interfaz de collares
import { Collares } from "src/app/models/collares";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //Propiedad Publica (tipo array)
  public info: Collares[];

//Inicializa la propiedad Info
  constructor(){
    this.info=[
     {
      id:"",
      titulo: "Tarjeta 1",
      material:"",
     descripcion:"Foto del collar",
      imagen:"https://www.losandes.com.ar/resizer/4ZBRkCuevq8jqrY8E8rNq25QCMY=/1023x1362/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6UZO6EFC2FHC3JLMLIKO3UPIEY.jpeg",
      alt:""
    },
    {
    id:"",
    titulo:"",
    material:"",
    descripcion:"",
    imagen:"",
    alt:""

    }
    ]
  }
ngOnInit():void{

}
}
[]
