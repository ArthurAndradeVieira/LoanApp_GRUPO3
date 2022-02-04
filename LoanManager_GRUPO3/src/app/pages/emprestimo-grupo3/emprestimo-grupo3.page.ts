import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { EmprestimoGRUPO3Service } from 'src/app/services/emprestimo-grupo3.service';

@Component({
  selector: 'app-emprestimo-grupo3',
  templateUrl: './emprestimo-grupo3.page.html',
  styleUrls: ['./emprestimo-grupo3.page.scss'],
})
export class EmprestimoGRUPO3Page implements OnInit {

  emprestimos: any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, 
    public EmprestimoGRUPO3Service: EmprestimoGRUPO3Service) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.emprestimos = this.EmprestimoGRUPO3Service.listar();
  }

  
  async excluirEmprestimo(id: number){    
    let contato = this.EmprestimoGRUPO3Service.buscarPorId(id);   

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
            this.EmprestimoGRUPO3Service.excluir(contato);
            this.emprestimos = this.EmprestimoGRUPO3Service.listar();
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
