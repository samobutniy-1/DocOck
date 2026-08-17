import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherCatalog } from './cipher-catalog';

describe('CipherCatalog', () => {
  let component: CipherCatalog;
  let fixture: ComponentFixture<CipherCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CipherCatalog],
    }).compileComponents();

    fixture = TestBed.createComponent(CipherCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
