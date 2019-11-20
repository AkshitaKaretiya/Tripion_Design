import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ExploreDealsComponent } from '../explore-deals/explore-deals.component';
import { PaymentComponent } from '../payment/payment.component';
import { AllPlanComponent } from '../all-plan/all-plan.component';
import { PlanOptionComponent } from '../plan-option/plan-option.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { PlanOptionDetailComponent } from '../plan-option-detail/plan-option-detail.component';
import { DocumentComponent } from '../document/document.component';
import { ProfileComponent } from '../profile/profile.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { SafeToTravelComponent } from '../safe-to-travel/safe-to-travel.component';
import { SafeTravelComponent } from '../safe-travel/safe-travel.component';
import { SafeTravelDetailComponent } from '../safe-travel-detail/safe-travel-detail.component';
import { BriefcaseComponent } from '../briefcase/briefcase.component';
import { FolderDetailComponent } from '../folder-detail/folder-detail.component';
import { OtherDocsComponent } from '../other-docs/other-docs.component';
import { PassportsComponent } from '../passports/passports.component';
import { PicturesComponent } from '../pictures/pictures.component';
import { UserPassportDetailComponent } from '../user-passport-detail/user-passport-detail.component';
import { VisaDetailComponent } from '../visa-detail/visa-detail.component';
import { EditUserPassportDetailComponent } from '../edit-user-passport-detail/edit-user-passport-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'home-page',
            pathMatch: 'full'
          },
          {
            path: 'home-page',
            component: HomePageComponent
          },
          {
            path: 'plan-option',
            component: PlanOptionComponent
          },
          {
            path: 'document',
            component: DocumentComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'benefits',
            component: BenefitsComponent
          },
          {
            path: 'safe-travel',
            component: SafeTravelComponent
          },
          {
            path: 'safe-to-travel',
            component: SafeToTravelComponent
          },
          {
            path: 'safe-travel-detail',
            component: SafeTravelDetailComponent
          },
          {
            path: 'briefcase',
            component: BriefcaseComponent
          },
          {
            path: 'folder-detail',
            component: FolderDetailComponent
          },
          {
            path: 'passports',
            component: PassportsComponent
          },
          {
            path: 'other-docs',
            component: OtherDocsComponent
          },
          {
            path: 'pictures',
            component: PicturesComponent
          },
          {
            path: 'user-passport-detail',
            component: UserPassportDetailComponent
          },
          {
            path: 'visa-detail',
            component: VisaDetailComponent
          },
          {
            path: 'edit-user-passport-detail',
            component: EditUserPassportDetailComponent
          },
          {
            path: 'plan-option-detail',
            component: PlanOptionDetailComponent
          },
          {
            path: 'explore-deals',
            component: ExploreDealsComponent
          },
          {
            path: 'payment',
            component: PaymentComponent
          },
          {
            path: 'all-plan',
            component: AllPlanComponent
          },

        ]
      },

    ])
  ],
  declarations: [
    HomePage,
    ExploreDealsComponent,
    PaymentComponent,
    AllPlanComponent,
    PlanOptionComponent,
    HomePageComponent,
    PlanOptionDetailComponent,
    DocumentComponent,
    ProfileComponent,
    BenefitsComponent,
    SafeTravelDetailComponent,
    SafeTravelComponent,
    SafeToTravelComponent,
    BriefcaseComponent,
    FolderDetailComponent,
    OtherDocsComponent,
    PassportsComponent,
    PicturesComponent,
    UserPassportDetailComponent,
    VisaDetailComponent,
    EditUserPassportDetailComponent
  ]
})
export class HomePageModule { }
