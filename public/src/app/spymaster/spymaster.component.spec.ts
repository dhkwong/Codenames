import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpymasterComponent } from './spymaster.component';

describe('SpymasterComponent', () => {
  let component: SpymasterComponent;
  let fixture: ComponentFixture<SpymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
