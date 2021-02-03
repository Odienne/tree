import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDonationComponent } from './tree-donation.component';

describe('TreeDonationComponent', () => {
  let component: TreeDonationComponent;
  let fixture: ComponentFixture<TreeDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
