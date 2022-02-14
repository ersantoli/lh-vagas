import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaralVagasComponent } from './muaral-vagas.component';

describe('MuaralVagasComponent', () => {
  let component: MuaralVagasComponent;
  let fixture: ComponentFixture<MuaralVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuaralVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaralVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
