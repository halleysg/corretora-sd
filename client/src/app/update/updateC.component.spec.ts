import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCComponent } from './updateC.component';

describe('UpdateComponent', () => {
  let component: UpdateCComponent;
  let fixture: ComponentFixture<UpdateCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
