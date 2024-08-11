import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController
  let heroService: HeroService;

  beforeEach(() => {

    mockMessageService = jasmine.createSpyObj(['add'])

    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],

      providers: [
        HeroService,
        { provide: MessageService, useValue: mockMessageService },
      ],
    });

   httpTestingController = TestBed.inject(HttpTestingController); // To create a Service instance using TestBed
   heroService = TestBed.inject(HeroService); // Creating an instance of Service
  });

  // For each function call , create a separate describe
  describe('getHero', ()=>{

    it('should call the correct url for getHeroes ', ()=>{

      // call the getHero, since getHero returns an Observable ,we've to subscribe to it
      heroService.getHero(11).subscribe()
      // heroService.getHero(12).subscribe();

      // Test that url was correct using httpController.expectOne
      const testReq = httpTestingController.expectOne('api/heroes/11');

      testReq.flush({ id: 11, name: 'Mr. Nice', strength: 10 }); // FLush the expected Response body

      expect(testReq.request.method).toBe('GET'); // To aoid expect warning

      httpTestingController.verify(); // Verifies that only expected http request is sent

    })
  })



});
