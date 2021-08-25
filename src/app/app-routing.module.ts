import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';

const routes: Routes = [{
  path:'',redirectTo:'black',pathMatch:'full'
},{
  path:'black',component:BlackComponent
},
{
  path:'white',component:WhiteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
