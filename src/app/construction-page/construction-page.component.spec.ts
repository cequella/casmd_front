import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionPageComponent } from './construction-page.component';

describe('ConstructionPageComponent', () => {
  let component: ConstructionPageComponent;
  let fixture: ComponentFixture<ConstructionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
