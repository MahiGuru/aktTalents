import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { JobsService } from '../services/jobs.service';
import { JobDetailsPipe } from '../shared/pipe/job-details.pipe';

interface Job {
  organization: string,
  location: string[],
  joining_date: string,
  expected_date: string,
  job_type: string,
};



@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule, JobDetailsPipe],
  providers: [JobsService],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  public jobs: any;

  constructor(private jobService: JobsService) {}

  async getAllJobs() {
    return await this.jobService.getAllJobs();
  }

  async ngOnInit() {
    this.jobs = await this.getAllJobs();
    console.log("this.jobs ", this.jobs);
  }
}
