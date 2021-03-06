import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  trigger,
  animate,
  transition,
  style,
  query,
  keyframes,
  group,
  animateChild
} from '@angular/animations';
export const stepper = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ right: '100%'}))
      ],{ optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true } ),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ],{ optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ],{ optional: true }),
    query(':leave', animateChild(),{ optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ right: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ right: '0%'}))
      ],{ optional: true })
    ]),
    query(':enter', animateChild(),{ optional: true }),
  ])
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper
  ]
})

export class AppComponent {
  title = 'app';
  ngOnInit(){
 /*    var applaunchCount = window.localStorage.getItem('firstLaunch');
    if(!applaunchCount){
      window.localStorage['firstLaunch'] = 'true';
    } */
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
