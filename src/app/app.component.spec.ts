import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpService } from './http-service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent
      ],
      providers: [HttpService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Search input element should be rendered`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let input = fixture.debugElement.query(By.css('#searchInput'));
    expect(input).toBeTruthy();
  });

  it('On click event handler should have been called', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'getSearchResult');
  
    let button = fixture.debugElement.nativeElement.querySelector('#click-button');
    button.click();
    tick();
    expect(component.getSearchResult).toHaveBeenCalled();
  
  }));
});
