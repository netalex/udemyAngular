import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test', 'Just a test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Winter-Christmas-Kitchen-Orange-Recipe-3031789.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
