import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunithComponent } from './punith.component';

describe('PunithComponent', () => {
  let component: PunithComponent;
  let fixture: ComponentFixture<PunithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
