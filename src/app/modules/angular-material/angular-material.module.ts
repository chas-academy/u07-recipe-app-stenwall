import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material cdk
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { LayoutModule } from '@angular/cdk/layout';

// angular material components
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetConfig,
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
} from '@angular/material/bottom-sheet';


const materialModules = [
  CdkTreeModule,
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatTabsModule,
  OverlayModule,
  PortalModule,
  LayoutModule,
  MatMenuModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MatBottomSheetConfig, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class AngularMaterialModule {}
