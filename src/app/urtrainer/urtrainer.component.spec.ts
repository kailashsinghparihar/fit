import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrtrainerComponent } from './urtrainer.component';

describe('UrtrainerComponent', () => {
  let component: UrtrainerComponent;
  let fixture: ComponentFixture<UrtrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrtrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
