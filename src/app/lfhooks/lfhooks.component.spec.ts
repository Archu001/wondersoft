import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfhooksComponent } from './lfhooks.component';

describe('LfhooksComponent', () => {
  let component: LfhooksComponent;
  let fixture: ComponentFixture<LfhooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LfhooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LfhooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
