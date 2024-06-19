import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, getDocs, query } from '@angular/fire/firestore';

interface Job {
  organization: string,
  location: string[],
  joining_date: string,
  expected_date: string,
  job_type: string,
};

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(public firestore: Firestore) { }

  async createJob(data: Job) {
    const docRef = await addDoc(collection(this.firestore, 'jobs'), data);
    console.log("Document written with ID: ", docRef.id);
  }

  async getAllJobs() {
    return (
      await getDocs(query(collection(this.firestore, 'jobs')))
     ).docs.map((job) => ({
        ...job.data(),
     }));
  }

}
