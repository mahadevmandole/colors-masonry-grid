import { Component } from '@angular/core';
import { ColorResult } from './app.model';
import { HttpService } from './http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  * Flag to show invalid state
  * @type {boolean}
  */
  inValid: boolean;

  constructor(private httpService: HttpService) {
    this.isLoading = false;
    this.inValid = false;

  }

  /**
   * Gets the result on search click.
   * @param {string} searchQuery - Search string.
   */
  getSearchResult(searchQueryString: string) {
    if (searchQueryString) {
      this.isLoading = true;
      this.inValid = false;
      const url = 'https://backend.picular.co/api/search?query=' + searchQueryString;
      this.httpService.fetchData(url).subscribe((data) => {
        this.isLoading = false;
        this.searchResult = data;
      })
    } else {
      this.inValid = true;
    }

  }
}
