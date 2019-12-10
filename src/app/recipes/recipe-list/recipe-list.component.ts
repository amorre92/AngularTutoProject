import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'yummy test', 'http://www.club-sandwich.net/images/photorecettes/burger-regime-123rf.jpg'),
    new Recipe('Barbecue recipe', 'yummy test 2', 'https://favorflav.com/images/shutterstock_403751194-916x458.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
