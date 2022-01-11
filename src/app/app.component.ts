import { Component } from '@angular/core';
import { ColorResult, HttpService } from './http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchResult: ColorResult | undefined;
  isLoading:boolean ;

  constructor(private httpService: HttpService) {
    this.isLoading = false;
  }

  getSearchResult(searchQuery: string) {
    console.log(searchQuery);
    this.isLoading = true;
    this.httpService.getSearchResult(searchQuery).subscribe((data) => {
      this.isLoading = false;
      this.searchResult = data;
    })
  }
}
