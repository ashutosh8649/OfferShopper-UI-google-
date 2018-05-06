import { TestBed, inject, async, getTestBed, ComponentFixture } from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HttpModule, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { OffersService } from './offers.service';

describe('OffersService', () => {
  let mockBackend: MockBackend;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [OffersService,
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory:
        (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }
      }],
      imports : [HttpClientModule,HttpModule],
    });
    mockBackend = getTestBed().get(MockBackend);

  });
  it('should be created', inject([OffersService], (service: OffersService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getOffers function', inject([OffersService], (service: OffersService) => {
    expect(service.getOffers).toBeTruthy();
  }));

  it('should have getAddress function', inject([OffersService], (service: OffersService) => {
    expect(service.getAddress).toBeTruthy();
  }));

  it('should have addToCarrybag function', inject([OffersService], (service: OffersService) => {
    expect(service.addToCarrybag).toBeTruthy();
  }));
});
