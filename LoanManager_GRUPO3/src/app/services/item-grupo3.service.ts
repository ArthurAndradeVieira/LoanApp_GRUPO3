import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemGRUPO3Service {

  constructor() { 
    let itens = JSON.parse(localStorage.getItem('tbItens'));
    if(!itens){
      itens = [];
      localStorage.setItem('tbItens', JSON.stringify(itens));
    }    
  }

  salvar(item: any){
    let itens = JSON.parse(localStorage.getItem('tbItens'));
    if(item.id){
      let posicao = itens.findIndex(c => c.id == item.id);
      itens[posicao] = item;
    }else{
      item.id = new Date().getTime();
      itens.push(item);
    } 
    localStorage.setItem('tbItens', JSON.stringify(itens));
  }

  excluir(item: any){
    let itens = JSON.parse(localStorage.getItem('tbItens'));
    itens = itens.filter(c => c.id != item.id);
    localStorage.setItem('tbItens', JSON.stringify(itens));
  }

  listar(){
    let itens = JSON.parse(localStorage.getItem('tbItens'));
    return itens;
  }

  buscarPorId(id: number){
    let itens = JSON.parse(localStorage.getItem('tbItens'));
    let item = itens.find(c => c.id == id);
    return item;
  }  
}
