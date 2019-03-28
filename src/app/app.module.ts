import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule }    from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { ProductComponent } from './product/product.component';
import { SecurityComponent } from './security/security.component';
import { ContactComponent } from './contact/contact.component';
import { TootbarComponent } from './tootbar/tootbar.component';
import { EmailChildComponent } from './login/email-child/email-child.component';
import { PasswordChildComponent } from './login/password-child/password-child.component';
import { SubmitChildComponent } from './login/submit-child/submit-child.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    FeatureComponent,
    ProductComponent,
    SecurityComponent,
    ContactComponent,
    TootbarComponent,
    EmailChildComponent,
    PasswordChildComponent,
    SubmitChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
