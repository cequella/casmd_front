import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdfundingPageComponent } from './crowdfunding-page.component';

describe('CrowdfundingPageComponent', () => {
  let component: CrowdfundingPageComponent;
  let fixture: ComponentFixture<CrowdfundingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdfundingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdfundingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
