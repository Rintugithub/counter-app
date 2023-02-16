import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouterComponent } from './couter/couter.component';
import { CouteroutputComponent } from './couteroutput/couteroutput.component';
import { CouterbuttonsComponent } from './couterbuttons/couterbuttons.component';
import { AddCounterComponent } from './add-counter/add-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CouterComponent,
    CouteroutputComponent,
    CouterbuttonsComponent,
    AddCounterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
