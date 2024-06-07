import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { EncriptacionComponent } from './components/encriptacion/encriptacion.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { CrudComponent } from './components/crud/crud.component';

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'encriptacion', component: EncriptacionComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'crud', component: CrudComponent }
];