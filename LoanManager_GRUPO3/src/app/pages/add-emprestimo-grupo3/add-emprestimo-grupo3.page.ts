import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ItemGRUPO3Service } from 'src/app/services/item-grupo3.service';
import { UsuarioGRUPO3Service } from 'src/app/services/usuario-grupo3.service';
import { EmprestimoGRUPO3Service } from 'src/app/services/emprestimo-grupo3.service';

@Component({
  selector: 'app-add-emprestimo-grupo3',
  templateUrl: './add-emprestimo-grupo3.page.html',
  styleUrls: ['./add-emprestimo-grupo3.page.scss'],
})
export class AddEmprestimoGRUPO3Page implements OnInit {

  itens: any = [];

  users: any = [];

  id: string;
  emprestimo = {
    id: null,
    nome: null,
    item: null,
    data: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: ToastController, 
    private ItemGRUPO3Service: ItemGRUPO3Service, private UsuarioGRUPO3Service: UsuarioGRUPO3Service, private EmprestimoGRUPO3Service: EmprestimoGRUPO3Service,  private formBuilder: FormBuilder) { 

    this.itens = this.ItemGRUPO3Service.listar();

    this.users = this.UsuarioGRUPO3Service.listar();
    
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
      ])],
      'item':['', Validators.compose([
        Validators.required,
      ])],
      'data':['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');    
    if(this.id){
      this.emprestimo = this.EmprestimoGRUPO3Service.buscarPorId(parseInt(this.id))
      this.formGroup.get('nome').setValue(this.emprestimo.nome);
      this.formGroup.get('item').setValue(this.emprestimo.item);
      this.formGroup.get('data').setValue(this.emprestimo.data);
      console.log(this.emprestimo)
    }
  }

  async submitForm(){   
    this.emprestimo.nome = this.formGroup.value.nome; 
    this.emprestimo.item = this.formGroup.value.item;
    this.emprestimo.data = this.formGroup.value.data;
    this.EmprestimoGRUPO3Service.salvar(this.emprestimo);   
    this.exibirMensagem('Registro salvo com sucesso!!!');
    this.navController.navigateBack('/emprestimo-grupo3');
    console.log(this.emprestimo)
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
