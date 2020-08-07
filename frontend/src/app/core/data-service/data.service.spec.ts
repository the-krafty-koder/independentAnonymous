import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let injector:TestBed;
  let service:DataService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
   TestBed.configureTestingModule({
     imports:[HttpClientTestingModule],
     providers:[DataService]
   })

   injector = getTestBed();
   service = injector.get(DataService);
   httpMock = injector.get(HttpTestingController)

  });

  afterEach(() => {
    httpMock.verify();
  }); 

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it("tests if http calls return data",()=>{
    service.fetchData().subscribe(result => {
      expect(result).toNotEqual({});
    })
  })
});
