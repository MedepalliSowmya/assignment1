import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdphaseComponent } from './thirdphase.component';

describe('ThirdphaseComponent', () => {
  let component: ThirdphaseComponent;
  let fixture: ComponentFixture<ThirdphaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdphaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdphaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
