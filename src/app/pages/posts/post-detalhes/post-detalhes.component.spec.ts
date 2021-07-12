import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetalhesComponent } from './post-detalhes.component';

describe('PostDetalhesComponent', () => {
  let component: PostDetalhesComponent;
  let fixture: ComponentFixture<PostDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
