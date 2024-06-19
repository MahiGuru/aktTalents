import { ButtonModule } from 'primeng/button';
import { Component, OnInit, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from '../shared/components/upload-file/upload-file.component';
import { EditorComponent } from '../shared/components/editor/editor.component';

import { Firestore, collectionData, collection, FirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { JobsService } from '../services/jobs.service';

interface City {
  name: string,
  code: string
}
interface Job {
  organization: string,
  location: string[],
  joining_date: string,
  expected_date: string,
  job_type: string,
};

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [
    ButtonModule,
    EditorComponent, FormsModule, InputTextModule, InputGroupAddonModule, InputGroupModule, MultiSelectModule],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.scss'
})
export class PostJobComponent implements OnInit {
    cities!: City[];
    loading: boolean = false;

    firestore: Firestore = inject(Firestore);

    constructor(public jobService: JobsService) {
    }


    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

}
