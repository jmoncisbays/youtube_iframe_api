import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, 
  MatTabsModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';

import { ExercisesRepository } from './repositories/exercises.repository';
import { DetailsComponent, DialogExerciseCompleteQuestion } from './components/details/details.component';
import { YoutubeDirective } from './directives/youtube.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PageNotFoundComponent,
    HomeComponent,
    NewComponent,
    DetailsComponent,
    DialogExerciseCompleteQuestion,
    YoutubeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    DialogExerciseCompleteQuestion
  ],
  providers: [
    ExercisesRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
