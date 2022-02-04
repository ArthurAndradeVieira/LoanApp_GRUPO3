import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-grupo3',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio-grupo3',
    loadChildren: () => import('./pages/inicio-grupo3/inicio-grupo3.module').then( m => m.InicioGRUPO3PageModule)
  },
  {
    path: 'login-grupo3',
    loadChildren: () => import('./pages/login-grupo3/login-grupo3.module').then( m => m.LoginGRUPO3PageModule)
  },
  {
    path: 'usuario-grupo3',
    loadChildren: () => import('./pages/usuario-grupo3/usuario-grupo3.module').then( m => m.UsuarioGRUPO3PageModule)
  },
  {
    path: 'item-grupo3',
    loadChildren: () => import('./pages/item-grupo3/item-grupo3.module').then( m => m.ItemGRUPO3PageModule)
  },
  {
    path: 'emprestimo-grupo3',
    loadChildren: () => import('./pages/emprestimo-grupo3/emprestimo-grupo3.module').then( m => m.EmprestimoGRUPO3PageModule)
  },
  {
    path: 'add-emprestimo-grupo3',
    loadChildren: () => import('./pages/add-emprestimo-grupo3/add-emprestimo-grupo3.module').then( m => m.AddEmprestimoGRUPO3PageModule)
  },
  {
    path: 'add-emprestimo-grupo3/:id',
    loadChildren: () => import('./pages/add-emprestimo-grupo3/add-emprestimo-grupo3.module').then( m => m.AddEmprestimoGRUPO3PageModule)
  },
  {
    path: 'add-item-grupo3',
    loadChildren: () => import('./pages/add-item-grupo3/add-item-grupo3.module').then( m => m.AddItemGRUPO3PageModule)
  },
  {
    path: 'add-item-grupo3/:id',
    loadChildren: () => import('./pages/add-item-grupo3/add-item-grupo3.module').then( m => m.AddItemGRUPO3PageModule)
  },
  {
    path: 'add-usuario-grupo3',
    loadChildren: () => import('./pages/add-usuario-grupo3/add-usuario-grupo3.module').then( m => m.AddUsuarioGRUPO3PageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
