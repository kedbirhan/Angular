import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
// 1. imports the PostCreateComponent class from the  ./posts/post-create/post-create.component.ts file
import {PostCreateComponent} from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule,MatInputModule,MatCardModule,MatButtonModule, MatExpansionModule,} from '@angular/material/';
import { PostListComponent } from './posts/post-list/post-list.component';



@NgModule({
  // here we are registering the AppComponents that our application uses so Angular can use it
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,PostListComponent
  ],
  // for ANgular to be aware of the imported modules we have to add it the imports array 
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
