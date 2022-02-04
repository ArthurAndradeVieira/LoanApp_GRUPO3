import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ItemGRUPO3Service } from 'src/app/services/item-grupo3.service';

@Component({
  selector: 'app-add-item-grupo3',
  templateUrl: './add-item-grupo3.page.html',
  styleUrls: ['./add-item-grupo3.page.scss'],
})
export class AddItemGRUPO3Page implements OnInit {

  id: string;
  item = {
    id: null,
    nome: null,
    observacao: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: ToastController, 
    private ItemGRUPO3Service: ItemGRUPO3Service,  private formBuilder: FormBuilder) { 
    
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
      ])],
      'observacao':['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');    
    if(this.id){
      this.item = this.ItemGRUPO3Service.buscarPorId(parseInt(this.id))
      this.formGroup.get('nome').setValue(this.item.nome);
      this.formGroup.get('observacao').setValue(this.item.observacao);
    }
  }

  async submitForm(){   
    this.item.nome = this.formGroup.value.nome; 
    this.item.observacao = this.formGroup.value.observacao;
    this.ItemGRUPO3Service.salvar(this.item);   
    this.exibirMensagem('Registro salvo com sucesso!!!');
    this.navController.navigateBack('/item');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
