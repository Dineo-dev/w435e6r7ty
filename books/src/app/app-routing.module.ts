import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './Components/book-list/book-list.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


const routes: Routes = [

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailsComponent},
  { path: 'add', component: AddBookComponent },
  { path: 'welcome', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
