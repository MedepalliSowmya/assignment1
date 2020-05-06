import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthphaseComponent } from './fourthphase.component';

describe('FourthphaseComponent', () => {
  let component: FourthphaseComponent;
  let fixture: ComponentFixture<FourthphaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthphaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
