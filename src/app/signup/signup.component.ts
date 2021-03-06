import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private pageTitle: string | undefined;
  private pagePath: string | undefined;

  constructor(private router: Router
  ) {
    router.events.subscribe((event ) => {
      const dataLayer = (window as any).dataLayer;
      if (event instanceof NavigationEnd && event?.url === '/signup') {
        if (typeof dataLayer !== undefined) {
          // (window as any).dataLayer.push({
          //   event : 'pageview',
          //   pagePath : this.pagePath || '/signup',
          //   pageTitle : this.pageTitle || 'Signup page'
          // });
          // console.log('dataLayer: ', dataLayer);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  signUp() {
    console.log('SIGNINUP RIGHT UP');

    // Here we will submit the event to GTM
    const dataLayer = (window as any).dataLayer;
    if (dataLayer) {
      console.log('Testing the event registrationComplete - dataLayer before the push');
      (window as any).dataLayer.push({
        event: 'registrationComplete',
        pagePath: '/signup',
        pageTitle: 'Signup page'
      });
      console.log('Testing the event registrationComplete - after the push/it has been called successfully!');
      console.log('dataLayer: ', dataLayer);
    }

  }
}
