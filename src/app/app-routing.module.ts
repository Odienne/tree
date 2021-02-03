import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {RegisterComponent} from "./components/register/register.component";
import {TreeComponent} from "./components/tree/tree.component";
import {TreesComponent} from "./components/trees/trees.component";
import {TreeDonationComponent} from "./components/tree-donation/tree-donation.component";
import {TreeUpdateComponent} from "./components/tree-update/tree-update.component";
import {TreeCreationComponent} from "./components/tree-creation/tree-creation.component";

const routes: Routes = [
  {path: '', redirectTo: 'trees', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'trees', component: TreesComponent},
  {path: 'trees/create', component: TreeCreationComponent},
  {path: 'trees/:id', component: TreeComponent},
  {path: 'trees/:id/donate', component: TreeDonationComponent},
  {path: 'trees/:id/update', component: TreeUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
