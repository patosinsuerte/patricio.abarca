import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExampleComponent } from './project-example.component';

describe('ProjectExampleComponent', () => {
  let component: ProjectExampleComponent;
  let fixture: ComponentFixture<ProjectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
