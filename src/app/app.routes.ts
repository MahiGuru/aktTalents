import { Routes } from '@angular/router';
import { PostJobComponent } from './post-job/post-job.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'postjob',
        component: PostJobComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
];
