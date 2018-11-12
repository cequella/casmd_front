import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingFooterComponent } from './helping-footer.component';

describe('HelpingFooterComponent', () => {
  let component: HelpingFooterComponent;
  let fixture: ComponentFixture<HelpingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
