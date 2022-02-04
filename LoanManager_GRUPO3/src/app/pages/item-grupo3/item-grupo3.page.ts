import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ItemGRUPO3Service } from 'src/app/services/item-grupo3.service';

@Component({
  selector: 'app-item-grupo3',
  templateUrl: './item-grupo3.page.html',
  styleUrls: ['./item-grupo3.page.scss'],
})
export class ItemGRUPO3Page implements OnInit {

  itens: any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, 
    public itemService: ItemGRUPO3Service) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.itens = this.itemService.listar();
  }
  
  async excluirItem(id: number){    
    let contato = this.itemService.buscarPorId(id);   

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
            this.itemService.excluir(contato);
            this.itens = this.itemService.listar();
            this.exibirMensagem();
          }
        }
      ]
    });
    await alert.present();
  }

  async exibirMensagem() {
    const toast = await this.toastController.create({
      message: 'Registro excluído com sucesso!!!',
      duration: 1500
    });
    toast.present();
  }

}
