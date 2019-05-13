import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { ClipboardService } from 'ngx-clipboard';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private dom: Document;
  email  = new FormControl()
  constructor( @Inject( DOCUMENT ) dom: Document , public  _clipboardService: ClipboardService) {   this.dom = dom; }

  ngOnInit() {
  //  const d = this.dom.getElementById('a').nodeValue;
  //  console.log('------', d)
  //   }

  //   callServiceToCopy() {
  //     window.open('localhost:4200/login', '_blanck')
  //     this._clipboardService.copyFromContent('This is copy thru service copyFromContent directly');
  }
cha(ev){
  console.log(this.email.value)
  const s : String = this.email.value;
  console.log(s.match(/[\w.+\-]*@homedepot\.com/ig))
}
  copyMessage(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
     
}
