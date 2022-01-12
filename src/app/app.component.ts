import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ColorResult } from './app.model';
import { HttpService } from './http-service';
import { debounceTime, filter, map } from "rxjs/operators";
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  /**
   * Search Result
   * @type {ColorResult | undefined}
   */
  searchResult: ColorResult | undefined;

  /**
   * Flag to show loader
   * @type {boolean}
   */
  isLoading: boolean;

  /**
  * Get input search field reference
  * @type {boolean}
  */
  @ViewChild('searchInputField')
  searchInputField!: ElementRef;

  constructor(private httpService: HttpService) {
    this.isLoading = false;
  }

  ngAfterViewInit() {
    fromEvent(this.searchInputField.nativeElement, 'input')
      .pipe(
        map((evt: any) => evt.target.value),
        filter((res: string) => res.length >= 2),
        debounceTime(300))
      .subscribe((text: string) => this.getSearchResult(text));
  }

  /**
   * Gets the result on search click.
   * @param {string} searchQuery - Search string.
   */
  getSearchResult(searchQueryString: string) {
    if (searchQueryString) {
      this.isLoading = true;
      const url = 'https://backend.picular.co/api/search?query=' + searchQueryString;
      this.httpService.fetchData(url).subscribe((data) => {
        this.isLoading = false;
        this.searchResult = data;
      })
    } 
  }

}
