import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMComponent } from './updateM.component ';

describe('UpdateMComponent', () => {
  let component: UpdateMComponent;
  let fixture: ComponentFixture<UpdateMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
