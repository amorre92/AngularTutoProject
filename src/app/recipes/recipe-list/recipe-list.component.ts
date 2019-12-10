import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'yummy test', 'https://www.google.be/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwje5IvulavmAhXoDmMBHZcMBVMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.gimmesomeoven.com%2Fjambalaya-recipe%2F&psig=AOvVaw02p8qz5AUbH1EZFe_jzLlt&ust=1576070386248888')
  ];

  constructor() { }

  ngOnInit() {
  }

}
