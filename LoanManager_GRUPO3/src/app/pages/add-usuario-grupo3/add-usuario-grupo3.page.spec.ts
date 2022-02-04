import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddUsuarioGRUPO3Page } from './add-usuario-grupo3.page';

describe('AddUsuarioGRUPO3Page', () => {
  let component: AddUsuarioGRUPO3Page;
  let fixture: ComponentFixture<AddUsuarioGRUPO3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsuarioGRUPO3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUsuarioGRUPO3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
