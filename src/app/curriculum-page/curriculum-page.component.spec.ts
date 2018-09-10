import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumPageComponent } from './curriculum-page.component';

describe('CurriculumPageComponent', () => {
  let component: CurriculumPageComponent;
  let fixture: ComponentFixture<CurriculumPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
