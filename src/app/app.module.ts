import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaComponent } from './carga/carga.component';
import {MatListModule}    from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSnackBarModule} from '@angular/material/snack-bar';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    PerfilComponent,                

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, DatePipe

    ,MatListModule,MatToolbarModule,MatMenuModule, MatButtonModule,MatSidenavModule,MatIconModule,MatCardModule,MatDividerModule,MatGridListModule
    ,MatDialogModule
    ,MatSelectModule,MatInputModule,MatFormFieldModule, MatTableModule, MatProgressSpinnerModule 

    ,BrowserAnimationsModule, MatAutocompleteModule    

    ,HttpClientModule
    ,ReactiveFormsModule , MatSnackBarModule
    ,MatDatepickerModule,MatInputModule,MatNativeDateModule , MatProgressBarModule
  ],
  providers: [        
    //{provide: MAT_DATE_LOCALE, useValue: 'es-ES' } ,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    //{provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
