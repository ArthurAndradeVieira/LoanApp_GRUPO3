import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-grupo3.component.html',
  styleUrls: ['./header-grupo3.component.scss'],
})
export class HeaderGRUPO3Component implements OnInit {

  @Input("titulo")
  titulo: string = 'A definir';
  @Input("rota")
  rota: string = 'inicio';
  @Input("cor")
  cor: string = 'dark';

  constructor() { }

  ngOnInit() {}

}

