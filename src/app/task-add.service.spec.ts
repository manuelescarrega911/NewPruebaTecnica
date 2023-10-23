import { TestBed } from '@angular/core/testing';
import { AggTask } from './task-add.service';


describe('TaskAddService', () => {
  let service: AggTask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggTask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
