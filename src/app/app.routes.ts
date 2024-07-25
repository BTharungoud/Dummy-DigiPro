import { Route, RouterModule, Routes } from '@angular/router';
import { DigitalMarketingComponent } from './modules/service/digital-marketing/digital-marketing.component';
import { WebAppDevelopmentComponent } from './modules/service/web-app-development/web-app-development.component';
import { LoginComponent } from './modules/about-us/login/login.component';
import { GraphicUiDesignComponent } from './modules/service/graphic-ui-design/graphic-ui-design.component';
import { ConsultingComponent } from './modules/service/consulting/consulting.component';
import { FutureBlogsComponent } from './modules/blogs/future-blogs/future-blogs.component';
import { ConsultUsComponent } from './modules/consult-us/consult-us/consult-us.component';
import { InfluencerMarkentingComponent } from './modules/service/influencer-markenting/influencer-markenting.component';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { ContactFormComponent } from './modules/about-us/contact-form/contact-form.component';
import { SignUpComponent } from './modules/about-us/sign-up/sign-up.component';
import { TrainingComponent } from './modules/careers/training/training.component';
import { InternshipComponent } from './modules/careers/internship/internship.component';
import { JobOpportunitiesComponent } from './modules/careers/job-opportunities/job-opportunities.component';
import { PortfolioComponent } from './modules/portfolio/portfolio/portfolio.component';
import { KnowMoreCardComponent } from './modules/card-containers/know-more-card/know-more-card.component';
import { NgModule } from '@angular/core';



const FRONTEND_ROUTES: Routes = [
      { path: 'service/digital-marketing', component: DigitalMarketingComponent },
      { path: 'service/web-development', component: WebAppDevelopmentComponent },
      { path: 'service/graphic-design', component: GraphicUiDesignComponent },
      { path: 'service/consulting', component: ConsultingComponent },
      { path: 'service/influencer-marketing', component: InfluencerMarkentingComponent },
      { path: '', redirectTo: '/service/digital-marketing', pathMatch: 'full' },  // Default route
      { path: '**', redirectTo: '/service/digital-marketing' }  // Wildcard route for a 404 page
    ];
    @NgModule({
      imports: [RouterModule.forRoot(FRONTEND_ROUTES)],
      exports: [RouterModule]
    })

// export const FRONTEND_ROUTES: Route[] = [
//       // SERVICE
//       {path: 'service/digital-marketing',component: DigitalMarketingComponent,},
//       {path: 'service/web-app-development',component: WebAppDevelopmentComponent,},
//       {path: 'service/consulting',component: ConsultingComponent,},
//       {path: 'service/graphic-ui-design',component: GraphicUiDesignComponent,},
//       {path: 'service/influencer-market',component: InfluencerMarkentingComponent,},
//       // CAREERS
//       {path: 'careers/training',component: TrainingComponent,},
//       {path: 'careers/internship',component: InternshipComponent,},
//       {path: 'careers/job-opportunity',component: JobOpportunitiesComponent,},
//       // ABOUT US
//       {path: 'about-us',component: AboutUsComponent,},
//       {path: 'login',component: LoginComponent,},
//       {path: 'contact',component: ContactFormComponent,},
//       {path: 'sign-up',component: SignUpComponent,},
//       // BLOGS
//       {path: 'blogs',component: FutureBlogsComponent,},
//       // CONSULT US
//       {path: 'consult-us',component: ConsultUsComponent,},
//       // PORTFOLIO
//       {path: 'portfolio', component: PortfolioComponent},
//       // KNOW MORE
//       {path:'service/digital-marketing/know-more',component:KnowMoreCardComponent}
// ];
