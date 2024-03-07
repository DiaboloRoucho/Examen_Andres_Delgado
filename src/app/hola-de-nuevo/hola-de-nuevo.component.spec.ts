import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaDeNuevoComponent } from './hola-de-nuevo.component';

describe('HolaDeNuevoComponent', () => {
  let component: HolaDeNuevoComponent;
  let fixture: ComponentFixture<HolaDeNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolaDeNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaDeNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
