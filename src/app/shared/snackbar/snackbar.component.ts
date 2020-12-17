import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'
import { NotificationService } from 'src/app/services/notification.service';
import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        top: '0px'
      })),
      state('visible', style({
        opacity:1,
        top: '30px'
      })),
      transition('hidden => visible', animate('500ms ease-in')),
      transition('visible => hidden', animate('500ms ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  public response:string;

  public snackVisbility:string = "hidden";

  constructor(private notification: NotificationService) { }

  ngOnInit() {
    let timer$ = timer(3000);
    this.notification.notifier.subscribe(message =>{
      this.response = message;
      this.snackVisbility = 'visible'
      timer$.subscribe( timer =>{
        this.snackVisbility = 'hidden'
      })
    })
  }

}
