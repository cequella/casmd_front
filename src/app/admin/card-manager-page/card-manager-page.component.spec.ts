import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardManagerPageComponent } from './card-manager-page.component';

describe('CardManagerPageComponent', () => {
  let component: CardManagerPageComponent;
  let fixture: ComponentFixture<CardManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
