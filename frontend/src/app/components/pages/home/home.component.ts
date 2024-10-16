import { Component, ViewChild } from '@angular/core';
import { NgxStarsComponent } from 'ngx-stars';
import { FoodService } from 'src/app/service/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods : Food[] = [];
  constructor(private foodService:FoodService){
    this.foods = this.foodService.getAll();
  }
}
