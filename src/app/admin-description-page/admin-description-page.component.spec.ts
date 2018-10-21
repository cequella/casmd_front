import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDescriptionPageComponent } from './admin-description-page.component';

describe('AdminDescriptionPageComponent', () => {
  let component: AdminDescriptionPageComponent;
  let fixture: ComponentFixture<AdminDescriptionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDescriptionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
