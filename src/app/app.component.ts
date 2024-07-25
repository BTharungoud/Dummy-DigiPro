import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDigitalMarketingRoute = false;
  isConsultingRoute = false;
  isGraphicsRoute = false;
  isInfluencerRoute = false;
  isWebAppRoute = false;
  // PORTFOLIO
  isPortfolioRoute = false;
  // CONSULT US
  isConsultUsRoute = false;
  // CAREERS
  isInternshipRoute = false;
  isTrainingRoute = false;
  isJobOpportunityRoute = false;
  // ABOUT US
  isAboutUsRoute = false;
  isContactFormRoute = false;
  isLoginRoute = false;
  isSignUpRoute = false;
  // BLOGS
  isFutureBlogsRoute = false;
  isServiceRoute = false;
  title: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateRouteFlags(event.url);
      }
    });
  }

  updateRouteFlags(url: string): void {
    this.isDigitalMarketingRoute = url.startsWith('/service/digital-marketing');
    this.isConsultingRoute = url.startsWith('/service/consulting');
    this.isGraphicsRoute = url.startsWith('/service/graphic-ui-design');
    this.isInfluencerRoute = url.startsWith('/service/influencer-market');
    this.isWebAppRoute = url.startsWith('/service/web-app-development');
    this.isPortfolioRoute = url.startsWith('/portfolio');
    this.isConsultUsRoute = url.startsWith('/consult-us');
    this.isInternshipRoute = url.startsWith('/careers/internship');
    this.isTrainingRoute = url.startsWith('/careers/training');
    this.isJobOpportunityRoute = url.startsWith('/careers/job-opportunity');
    this.isAboutUsRoute = url.startsWith('/about-us');
    this.isContactFormRoute = url.startsWith('/contact');
    this.isLoginRoute = url.startsWith('/login');
    this.isSignUpRoute = url.startsWith('/sign-up');
    this.isFutureBlogsRoute = url.startsWith('/blogs');


    this.isServiceRoute = this.isDigitalMarketingRoute || this.isConsultingRoute || this.isGraphicsRoute ||
    this.isInfluencerRoute || this.isWebAppRoute || this.isPortfolioRoute || 
    this.isConsultUsRoute || this.isInternshipRoute || this.isTrainingRoute || 
    this.isJobOpportunityRoute || this.isAboutUsRoute || this.isContactFormRoute || 
    this.isLoginRoute || this.isSignUpRoute || this.isFutureBlogsRoute;

  }
}
