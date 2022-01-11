import { inject, TestBed } from '@angular/core/testing';
import {  HttpClientTestingModule, HttpTestingController }
    from '@angular/common/http/testing';
import { HttpService } from './http-service';
import { MockResult } from './mock/result.response';


describe('Http fetch data Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });
    });

    it('should create service', inject([HttpService], (service: HttpService) => {
        expect(service).toBeTruthy();
    }));

    it('fetch Data should should provide data', inject([HttpService, HttpTestingController], 
        (service: HttpService,httpTestingController:HttpTestingController) => {
        const url = 'https://backend.picular.co/api/search?query=red';
        service.fetchData(url).subscribe((resultData) => {
            expect(JSON.stringify(resultData)).toEqual(JSON.stringify(MockResult));
        });
        const req = httpTestingController.expectOne(`https://backend.picular.co/api/search?query=red`);
        req.flush(MockResult);
    }));
});