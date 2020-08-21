import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigndataComponent } from './signdata.component';

describe('SigndataComponent', () => {
  let component: SigndataComponent;
  let fixture: ComponentFixture<SigndataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigndataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigndataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
