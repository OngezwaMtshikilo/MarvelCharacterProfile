import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecharactersComponent } from './managecharacters.component';

describe('ManagecharactersComponent', () => {
  let component: ManagecharactersComponent;
  let fixture: ComponentFixture<ManagecharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
