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
		path: 'catalog',
		loadChildren: () => import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
	},
	{
		path: 'catalog/product',
		loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
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
