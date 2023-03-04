import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchResultComponent } from './search-result.component';

describe('SerchResultComponent', () => {
  let component: SerchResultComponent;
  let fixture: ComponentFixture<SerchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
