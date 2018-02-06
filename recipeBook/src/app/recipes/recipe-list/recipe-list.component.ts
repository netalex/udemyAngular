import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>()
  recipes:Recipe[] = [
    new Recipe('Test', 'Just a test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Winter-Christmas-Kitchen-Orange-Recipe-3031789.jpg'),
    new Recipe('Another Test', 'Just a test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Winter-Christmas-Kitchen-Orange-Recipe-3031789.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
