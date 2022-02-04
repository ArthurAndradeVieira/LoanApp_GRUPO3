import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioGRUPO3Service } from 'src/app/services/usuario-grupo3.service';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-usuario-grupo3',
  templateUrl: './usuario-grupo3.page.html',
  styleUrls: ['./usuario-grupo3.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class UsuarioGRUPO3Page implements OnInit {

  usuario = {
    id: null,
    nome: null,
    email: null,
    senha: null
  }

  users: any = []

  public formGroup: FormGroup;

  constructor(public alertController: AlertController, private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: ToastController, private formBuilder: FormBuilder, private UsuarioGRUPO3Service: UsuarioGRUPO3Service) { 
    this.users = this.UsuarioGRUPO3Service.listar();
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
      ])],
      'email':['', Validators.compose([
        Validators.required,
      ])],
      'senha':['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  async excluirUser(id: number){    
    let contato = this.UsuarioGRUPO3Service.buscarPorId(id);   

    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: contato.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.UsuarioGRUPO3Service.excluir(contato);
            this.UsuarioGRUPO3Service = this.UsuarioGRUPO3Service.listar();
            this.exibirMensagem("REGISTRO EXCLUIDO COM SUCESSO");
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.usuario = this.UsuarioGRUPO3Service.recuperarAutenticacao();

    this.formGroup.get('nome').setValue(this.usuario.nome);
    this.formGroup.get('email').setValue(this.usuario.email);
    this.formGroup.get('senha').setValue(this.usuario.senha);

  }

  
  async submitForm(){    

    this.usuario.nome = this.formGroup.value.nome; 
    this.usuario.email = this.formGroup.value.email; 
    this.usuario.senha = this.formGroup.value.senha; 

    this.UsuarioGRUPO3Service.salvar(this.usuario);
  
    this.exibirMensagem('Registro salvo com sucesso!!!');
    this.navController.navigateBack('/inicio-grupo3');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

  async getNomeUser(){
    return this.usuario.nome
  }


}
