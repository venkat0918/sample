import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { ApiServiceService } from 'src/app/services/api-service.service';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  user;
  room;
  messageArray: Array<any> = [];
  messageText: String;
  constructor(public service: ApiServiceService) {
  }

  ngOnInit() {
    this.service.newUserJoined().subscribe(data => {
      this.messageArray.push(data)
    });


    this.service.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this.service.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }
  join() {
    this.service.joinRomm({ user: this.user, room: this.room });
  }

  leave() {
    this.service.leaveRoom({ user: this.user, room: this.room });
  }

  sendMessage() {
    this.service.sendMessage({ user: this.user, room: this.room, message: this.messageText });
  }

  captureScreen() {
    // window.open('https://jsfiddle.net/damithz/Lo7kznLu/', 'Download');
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')
      console.log(contentDataURL);  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  

    // let doc = new jspdf();
    // doc.addHTML(document.getElementById("contentToConvert"), function() {
    //    doc.save("obrz.pdf");
    // });

    // var myCanvas: any = document.getElementById("contentToConvert");
    // var ctx = myCanvas.getContext("2d");

    // /* Création d'un rectangle */
    // ctx.rect(10, 10, 200, 100);
    // ctx.stroke();

    // var data = myCanvas.toDataURL();
    // console.log(data);


  }
}

