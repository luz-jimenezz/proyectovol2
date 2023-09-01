import { Component } from '@angular/core';
import { AuthService } from "../sevices/auth.service";
import { Usuario} from "src/app/models/usuario";
import { async } from '@angular/core/testing';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //input de contraseña
  //definicion de  forma publica del servicio auth
  constructor(
    public servicioAuth:AuthService,
    public servicioFirestore:FirestoreService,
    public router:Router
  ){

  }
  //importacion de modelo
    usuarios: Usuario ={
      uid:'',
      nombre:'',
      rol:'',
      contrasena:''
}
  uid='';

  CollectionUsuarios:Usuario[]=[];



   async registrarse(){
      const credenciales ={
        nombre: this.usuarios.nombre,
        contrasena: this.usuarios.contrasena
      };
      const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
      //metodo THEN devuelve la misma persona
      .then(res=>{
        alert("Ha agregado un nuevo usuario con exito :) ")

        this.router.navigate(["/inicio"])
      })
      //metodo CATCH creara un error en caso de que algo salga mal
      .catch(error =>
        alert ("Hubo un error al crear el usuario :( /n"+ error)
        );
        //creamos constante UID para
        const uid= await this.servicioAuth.getUid();
        this.usuarios.uid=uid;
        this.guardaUser();
    }
    async guardaUser(){
      this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res=>{
        console.log(this.usuarios);
      })
      .catch(error =>{
        console.log('Error =>', error);
      })
    }
    async ngOnInit(){
      const uid =await this.servicioAuth.getUid();
      console.log(uid);
    }
}
