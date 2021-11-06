import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { EditComponent } from './tarea/assets/edit/edit.component';
import { DeleteComponent } from './tarea/assets/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
