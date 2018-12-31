import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
	 ReactiveFormsModule
       } from '@angular/forms';

// Modules
import { SiteRoutingModule }     from './site-routing.module';
import { MaterialModulesModule } from '../material-modules.module';

// Site
import { SiteComponent }                     from './site.component';
import { HomePageComponent }                 from './home-page/home-page.component';
import { DocumentationPageComponent }        from './documentation-page/documentation-page.component';
import { CrowdfundingPageComponent }         from './crowdfunding-page/crowdfunding-page.component';
import { CrowdfundingDetailsPageComponent }  from './crowdfunding-details-page/crowdfunding-details-page.component';
import { NewsPageComponent }                 from './news-page/news-page.component';

// Components
import { TimeLineComponent }          from './time-line/time-line.component';
import { NewHeadlineComponent }       from './new-headline/new-headline.component';
import { StudentCardSearchComponent } from './student-card-search/student-card-search.component';
import { HelpingFooterComponent }     from './helping-footer/helping-footer.component';

// Resolver
import { HomeResolverService } from './resolvers/home-resolver.service';
import { PostResolverService } from './resolvers/post-resolver.service';

@NgModule({
    imports: [
	CommonModule,
	MaterialModulesModule,
	SiteRoutingModule,

    	FormsModule,
	ReactiveFormsModule
    ],
    declarations: [
	// Components
	SiteComponent,
	TimeLineComponent,
	NewHeadlineComponent,
	StudentCardSearchComponent,
	HelpingFooterComponent,

	// Page
	HomePageComponent,
	DocumentationPageComponent,
	CrowdfundingPageComponent,
	CrowdfundingDetailsPageComponent,
	NewsPageComponent
    ],
    providers: [
	// Resolvers
	HomeResolverService,
	PostResolverService
    ]
})
export class SiteModule { }
