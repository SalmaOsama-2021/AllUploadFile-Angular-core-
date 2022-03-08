import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';
import {
  PdfViewerModule
 } from '@syncfusion/ej2-angular-pdfviewer';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UploadComponent
 
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
