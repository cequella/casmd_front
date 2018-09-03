import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeadlineComponent } from './new-headline.component';

describe('NewHeadlineComponent', () => {
  let component: NewHeadlineComponent;
  let fixture: ComponentFixture<NewHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
