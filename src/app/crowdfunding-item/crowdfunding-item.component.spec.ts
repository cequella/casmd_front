import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdfundingItemComponent } from './crowdfunding-item.component';

describe('CrowdfundingItemComponent', () => {
  let component: CrowdfundingItemComponent;
  let fixture: ComponentFixture<CrowdfundingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdfundingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdfundingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
