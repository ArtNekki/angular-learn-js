import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/index/index.module').then((m) => m.IndexModule),
	},
	{
		path: 'categories',
		loadChildren: () => import('./pages/categories/categories.module').then((m) => m.CategoriesModule),
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
