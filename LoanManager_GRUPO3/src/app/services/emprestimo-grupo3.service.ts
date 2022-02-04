import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoGRUPO3Service {

  constructor() { 
    let emprestimos = JSON.parse(localStorage.getItem('tbEmprestimos'));
    if(!emprestimos){
      emprestimos = [];
      localStorage.setItem('tbEmprestimos', JSON.stringify(emprestimos));
    }    
  }

  salvar(emprestimo: any){
    let emprestimos = JSON.parse(localStorage.getItem('tbEmprestimos'));
    if(emprestimo.id){
      let posicao = emprestimos.findIndex(c => c.id == emprestimo.id);
      emprestimos[posicao] = emprestimo;
    }else{
      emprestimo.id = new Date().getTime();
      emprestimos.push(emprestimo);
    } 
    localStorage.setItem('tbEmprestimos', JSON.stringify(emprestimos));
  }

  excluir(emprestimo: any){
    let emprestimos = JSON.parse(localStorage.getItem('tbEmprestimos'));
    emprestimos = emprestimos.filter(c => c.id != emprestimo.id);
    localStorage.setItem('tbEmprestimos', JSON.stringify(emprestimos));
  }

  listar(){
    let emprestimos = JSON.parse(localStorage.getItem('tbEmprestimos'));
    return emprestimos;
  }

  buscarPorId(id: number){
    let emprestimos = JSON.parse(localStorage.getItem('tbEmprestimos'));
    let emprestimo = emprestimos.find(c => c.id == id);
    return emprestimo;
  }  
}
