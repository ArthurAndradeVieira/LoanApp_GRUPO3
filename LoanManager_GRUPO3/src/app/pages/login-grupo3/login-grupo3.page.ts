import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioGRUPO3Service } from 'src/app/services/usuario-grupo3.service';

@Component({
  selector: 'app-login-grupo3',
  templateUrl: './login-grupo3.page.html',
  styleUrls: ['./login-grupo3.page.scss'],
})
export class LoginGRUPO3Page implements OnInit {

  usuario = {  
    email: null,
    senha: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: 
    ToastController, private formBuilder: FormBuilder, private UsuarioGRUPO3Service: UsuarioGRUPO3Service) { 

    this.formGroup = this.formBuilder.group({     
      'email':['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'senha':['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  ngOnInit() {
    this.UsuarioGRUPO3Service.encerrarAutenticacao();
  }

  async submitForm(){   
    this.usuario.email = this.formGroup.value.email; 
    this.usuario.senha = this.formGroup.value.senha; 
    if(this.UsuarioGRUPO3Service.autenticar(this.usuario.email, this.usuario.senha)){
      this.navController.navigateBack('/inicio-grupo3');
    }else{
      this.exibirMensagem('E-mail ou senha incorretos');
      this.navController.navigateBack('/login-grupo3');
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
