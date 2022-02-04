import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioGRUPO3Service } from 'src/app/services/usuario-grupo3.service';

@Component({
  selector: 'app-add-usuario-grupo3',
  templateUrl: './add-usuario-grupo3.page.html',
  styleUrls: ['./add-usuario-grupo3.page.scss'],
})
export class AddUsuarioGRUPO3Page implements OnInit {

  usuario = {
    id: null,
    nome: null,
    email: null,
    senha: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: 
    ToastController, private formBuilder: FormBuilder, private UsuarioGRUPO3Service: UsuarioGRUPO3Service) { 
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
      ])],
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
  }

  async submitForm(){    
    this.usuario.nome = this.formGroup.value.nome; 
    this.usuario.email = this.formGroup.value.email; 
    this.usuario.senha = this.formGroup.value.senha; 
    this.UsuarioGRUPO3Service.salvar(this.usuario);  
    this.exibirMensagem('Registro salvo com sucesso!!!');
    this.navController.navigateBack('/login-grupo3');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
