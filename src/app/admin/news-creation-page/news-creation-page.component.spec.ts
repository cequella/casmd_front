import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCreationPageComponent } from './news-creation-page.component';

describe('NewsCreationPageComponent', () => {
  let component: NewsCreationPageComponent;
  let fixture: ComponentFixture<NewsCreationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCreationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
