# colors-masonry-grid
Once the user enters the input word, the related colors to that word are listed out in the form of a masonry grid of color cards.

## Visit Site
 - [Color Masonry Grid](https://mahadevmandole.github.io/colors-masonry-grid/)
## Features

- Fetch colors for searched words

## Data Set
 - Data set fetched from below api
  - https://backend.picular.co/api/search?query=searchstring
  - Result example for 'https://backend.picular.co/api/search?query=red'
  ```javascript
    {
    colors:[
        {
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiPuGHlGGDTDX6QfycbcJGI0oid1DOpiiRd9sNGvX-Tnp0JzRP7H9E2lUlU0&amp;s",
          "color": "#B40404",
          "light": false
        },
        {
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPI91NB1mFiQk0HOhy5uynas7dmpxJV8bYMb0kznAioPCCfmjjuoQWG5qpwQ&amp;s",
          "color": "#FC0404",
          "light": false
        },
        {
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1A7AFM9O0ETGwEloCWg6DAvzZCOwZ1VsLJs8y7iujJpaeUUFRosN56HqusKo&amp;s",
          "color": "#F80404",
          "light": false
        },
        {
          "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANVs2aisb3DPWg4xjdD8vgspMMrJaMx3P4KzDGg_Eq1TRYoUZxCLZ-jvvhf4&amp;s",
          "color": "#FC0412",
          "light": false
        }
      ],
    primary:'#B40404',
    secondary:'#FA1A1A'
}
  ```
## Prerequisite
 - Angular CLI: 12.0.5
 - Node: 12.14.1
 - Package Manager: npm 6.13.4

## Steps to setup project
```sh
git clone https://github.com/mahadevmandole/colors-masonry-grid.git

cd colors-masonry-grid

npm install 

```
## Run Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Create Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
