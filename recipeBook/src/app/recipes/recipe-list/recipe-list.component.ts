import { Component, OnInit } from '@angular/core';
import { Recipes } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipes[] = [
    new Recipes('Test', 'Just a test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Winter-Christmas-Kitchen-Orange-Recipes-3031789.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
