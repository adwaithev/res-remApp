import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremComponent } from './addrem.component';

describe('AddremComponent', () => {
  let component: AddremComponent;
  let fixture: ComponentFixture<AddremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
