import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent }, // Ruta para UsersComponent
  { path: 'posts', component: PostsComponent }, // Ruta para PostsComponent
  { path: 'home', component: MainComponent},
  { path: '', redirectTo: 'home' , pathMatch: 'full'  }
];

@NgModule({
  
  imports: [
    
    RouterModule.forRoot(routes) // Configura las rutas aquí
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
