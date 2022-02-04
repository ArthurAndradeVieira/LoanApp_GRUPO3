import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEmprestimoGRUPO3Page } from './add-emprestimo-grupo3.page';

describe('AddEmprestimoGRUPO3Page', () => {
  let component: AddEmprestimoGRUPO3Page;
  let fixture: ComponentFixture<AddEmprestimoGRUPO3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmprestimoGRUPO3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEmprestimoGRUPO3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
