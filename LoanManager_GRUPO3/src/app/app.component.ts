import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/inicio-grupo3', icon: 'home' },
    { title: 'Meus dados', url: '/usuario-grupo3', icon: 'man' },
    { title: 'Itens', url: '/item-grupo3', icon: 'document-text' },
    { title: 'Emprestimos', url: '/emprestimo-grupo3', icon: 'file-tray-full'},
    { title: 'Historico', url: '/historico', icon: 'time'},
    { title: 'Sair', url: '/login-grupo3', icon: 'log-out' }
  ];
  
}