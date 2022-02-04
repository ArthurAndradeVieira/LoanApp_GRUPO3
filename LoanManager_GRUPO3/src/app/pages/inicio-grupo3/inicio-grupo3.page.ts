import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-grupo3',
  templateUrl: './inicio-grupo3.page.html',
  styleUrls: ['./inicio-grupo3.page.scss'],
})
export class InicioGRUPO3Page implements OnInit {

  public appPages = [
    { title: 'Meus dados', url: '/usuario-grupo3', icon: 'man', color: 'primary' },
    { title: 'Itens', url: '/item-grupo3', icon: 'document-text', color: 'warning' },
    { title: 'Emprestimos', url: '/emprestimo-grupo3', icon: 'file-tray-full', color: 'success'},
    { title: 'Historico', url: '/historico', icon: 'time', color: 'dark'},
    { title: 'Sair', url: '/login-grupo3', icon: 'log-out', color: 'danger' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
