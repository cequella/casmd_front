import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { SiteComponent }                     from './site.component';
import { HomePageComponent }                 from './home-page/home-page.component';
import { DocumentationPageComponent }        from './documentation-page/documentation-page.component';
import { CrowdfundingPageComponent }         from './crowdfunding-page/crowdfunding-page.component';
import { CrowdfundingDetailsPageComponent }  from './crowdfunding-details-page/crowdfunding-details-page.component';
import { NewsPageComponent }                 from './news-page/news-page.component';

// Resolvers
import { HomeResolverService } from './resolvers/home-resolver.service';
import { PostResolverService } from './resolvers/post-resolver.service';

const routes: Routes = [
    { path: 'site', component: SiteComponent, children: [
	{ path: '', component: HomePageComponent,
	  resolve: {postlist: HomeResolverService}
	},
	{ path: 'noticia/:id', component: NewsPageComponent,
	  resolve: {post: PostResolverService}
	},
	{ path: 'documentos',    component: DocumentationPageComponent },
	{ path: 'vaquinhas',     component: CrowdfundingPageComponent },
	{ path: 'vaquinhas/:id', component: CrowdfundingDetailsPageComponent },
    ] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class SiteRoutingModule {}
