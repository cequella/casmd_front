import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardSearchComponent } from './student-card-search.component';

describe('StudentCardSearchComponent', () => {
  let component: StudentCardSearchComponent;
  let fixture: ComponentFixture<StudentCardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCardSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
