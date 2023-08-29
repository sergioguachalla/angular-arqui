import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app/app.component';
import { UsersComponent } from '../app/components/users/users.component';
import { PostsComponent } from '../app/components/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component'; // Importa AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Agrega AppRoutingModule aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
