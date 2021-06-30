import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainTipsComponent } from './chain-tips.component';

describe('ChainTipsComponent', () => {
  let component: ChainTipsComponent;
  let fixture: ComponentFixture<ChainTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChainTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
