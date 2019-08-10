import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
// 1. imports the PostCreateComponent class from the  ./posts/post-create/post-create.component.ts file
import {PostCreateComponent} from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  // here we are registering the AppComponents that our application uses so Angular can use it
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent
  ],
  // for ANgular to be aware of the imported modules we have to add it the imports array 
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
