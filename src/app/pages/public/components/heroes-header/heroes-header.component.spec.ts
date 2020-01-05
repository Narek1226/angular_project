import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesHeaderComponent } from './heroes-header.component';

describe('HeroesHeaderComponent', () => {
  let component: HeroesHeaderComponent;
  let fixture: ComponentFixture<HeroesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
