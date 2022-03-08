import { UserToCreate } from './_interface/userToCreate.model';
import { Component, OnInit } from '@angular/core';
import PSPDFKit from 'pspdfkit';
import {Document} from './_interface/Document.model';
import { HttpClient } from '@angular/common/http';

import {
  LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService,
   ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService
 } from '@syncfusion/ej2-angular-pdfviewer';
import { from } from 'rxjs';
// import { format } from 'path';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, NavigationService, TextSearchService, TextSelectionService, PrintService]
})

export class AppComponent  {
  title = 'angular1';
  public isCreate: boolean|any;
  public documentTitle: string='';
  public id:string='0';
  public documentDesciption: string='';
  public response:{ dbPath: ''; } |any ;
  public Document: UserToCreate|any;
  public Documents: Document[] = [];
public fileName:string='';
public fileAllPath:string='';
public creatationDate:string|any;
public input:any;
public showValid:boolean|any;
public form:NgForm|any;
  constructor(private http: HttpClient){
    // this.input={
    //   // "documentTitle":"",
    //   // "documentDesciption":"",
    //   // "creatationDate":""
    // }
  }

  ngOnInit(){
    this.isCreate = true;
  }
  public OnCreate=()=>{
    debugger;
   
// if(this.form.invalid) return this.showValid=true ;
// return 
    var filepath="https://localhost:44303/"+this.response.dbPath
    this.Document = {
      // id:this.id,
      documentTitle: this.documentTitle,
      documentDesciption: this.documentDesciption,
      documentURL: this.response.dbPath,
      creatationDate:  this.creatationDate,
     
      fileName: JSON.stringify(filepath).split('\\').pop()?.split('"')[0]
    //   baseUrl:"https://localhost:44303/"+this.response.dbPath
     }
 
  console.log(this.Document[4])
  
this.http.post('https://localhost:44303/api/Documents', this.Document)
    .subscribe(res => {
      this.getUsers();
      this.isCreate = false;
    });
  }
  private getUsers = () => {
    debugger;
    this.http.get('https://localhost:44303/api/Documents')
    .subscribe(res => {
      this.Documents = res as Document[];
      console.log( this.Documents = res as Document[]);
    });
    
  }

  public returnToCreate = () => {
    debugger;
    this.isCreate = true;
    this.documentTitle = '';
    this. documentDesciption = '';
    this.creatationDate='';
 
  }

  public uploadFinished = (event:any) => {
    this.response = event;
  }
  public createImgPath = (serverPath: string) => {
    debugger;
    return `https://localhost:44303/${serverPath}`;
  }
 
}
/**
 c oncreate
 */
