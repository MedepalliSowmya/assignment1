import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondphaseComponent } from './secondphase.component';

describe('SecondphaseComponent', () => {
  let component: SecondphaseComponent;
  let fixture: ComponentFixture<SecondphaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondphaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
