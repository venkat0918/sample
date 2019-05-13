import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public socket = io('http://localhost:3000')
  constructor() { }

  joinRomm(data) {
    this.socket.emit('join', data)
  }
  newUserJoined() {
    let observable = new Observable<{ user: String, room: String }>(observer => {
      this.socket.on('new user joined', (data) => {
        observer.next(data)
      })
      return () => { this.socket.disconnect() }
    });
    return observable;
  }

  leaveRoom(data) {
    this.socket.emit('leave', data);
  }

  userLeftRoom() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('left room', (data, error) => {
        observer.next(data);
        observer.error(error)
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }
    });

    return observable;
  }
}
