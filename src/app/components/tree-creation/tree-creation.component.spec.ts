import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCreationComponent } from './tree-creation.component';

describe('TreeCreationComponent', () => {
  let component: TreeCreationComponent;
  let fixture: ComponentFixture<TreeCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
