import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public  progress: number=0;
  public message: string="";
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public uploadFile = (files:any) => {
    debugger
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:44379/api/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress){
        if (event.total) {  
          const total: number = event.total;  
          this.progress = Math.round(100 * event.loaded / total);    
      }  
        // this.progress = Math.round(100 * event.loaded / event.total);
    }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
}
