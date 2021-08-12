import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { Recipe } from 'src/app/models/api-spoonacular.model';
import { ListService } from '../../services/list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SaveListDialogComponent } from '../save-list-dialog/save-list-dialog.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit, OnChanges {
  @Input() data: Recipe[];

  showRecipes: Recipe[];

  constructor(
    private listService: ListService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.showRecipes = this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.showRecipes = this.data;
    }
  }

  openDialog(event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(SaveListDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  // addRecipeToList(event: any, id: number, user_id: number, title: string, img: string): void {
  //   event.stopPropagation();
  //   this.listService.addToList(id, user_id, title, img);
  // }

  // removeRecipeFromList(event: any, id: number): void {
  //   event.stopPropagation();
  //   this.listService.removeFromList(id);
  // }

  // isRecipeSaved(id: number): boolean {
  //   return this.listService.checkIfRecipeInList(id);
  // }
}

// source to getting input updates from parent:
// -----------------------------------------------------------------------
// https://www.digitalocean.com/community/tutorials/3-ways-to-pass-async-data-to-angular-2-child-components
