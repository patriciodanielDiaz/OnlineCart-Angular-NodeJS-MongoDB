import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  { path: 'listProduct', component: ProductListComponent, canActivate: [AuthGuard]  },
  { path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard]  },
  { path: 'listUser', component: UserListComponent, canActivate: [AuthGuard]  },
  { path: 'user/:id', component: UserViewComponent, canActivate: [AuthGuard]  },
  { path: 'product/:id', component: ProductViewComponent, canActivate: [AuthGuard]  },
 
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/listProduct', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
