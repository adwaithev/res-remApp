import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewremComponent } from './viewrem.component';

describe('ViewremComponent', () => {
  let component: ViewremComponent;
  let fixture: ComponentFixture<ViewremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
