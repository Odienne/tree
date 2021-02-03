import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreesComponent } from './components/trees/trees.component';

import { HttpClientModule } from '@angular/common/http';
import { TreeDonationComponent } from './components/tree-donation/tree-donation.component';
import { TreeCreationComponent } from './components/tree-creation/tree-creation.component';
import { TreeUpdateComponent } from './components/tree-update/tree-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavComponent,
    RegisterComponent,
    TreeComponent,
    TreesComponent,
    TreeDonationComponent,
    TreeCreationComponent,
    TreeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
