import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  savedRecipes: List[];
  // savedRecipes = [
  //   {
  //     id: 798400,
  //     image: 'https://spoonacular.com/recipeImages/798400-556x370.jpg',
  //     title: 'Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant',
  //   },
  //   {
  //     id: 663559,
  //     image: 'https://spoonacular.com/recipeImages/663559-556x370.jpg',
  //     title: 'Tomato and lentil soup',
  //   },
  //   {
  //     id: 650751,
  //     image: 'https://spoonacular.com/recipeImages/650751-556x370.jpg',
  //     title: 'Mango Avocado Ice Cream',
  //   },
  //   {
  //     id: 665016,
  //     title: 'Watermelon Jalapeño Cocktail Cooler',
  //     image: 'https://spoonacular.com/recipeImages/665016-556x370.jpg',
  //   },
  // ];
  data;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => (this.data = data));

    this.savedRecipes = this.listService.list;
    console.log(this.savedRecipes);
  }

  removeRecipeFromList(event, id) {
    event.stopPropagation();
    this.listService.removeFromList(id);
    this.router.navigate(['/list']);
  }
}

// sources for links within links:
// -----------------------------------------------------------------------
// https://stackoverflow.com/questions/43642250/how-to-make-a-link-inside-element-with-router-link-in-angular-2
// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button/50285339