import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpMsgService} from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/observable/of';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular, 
    private processHttpMsgService: ProcessHttpMsgService) { }

  getFeedbacks(): Observable<Feedback[]> {
    return this.restangular.all('feedback').getList();
  }

  getFeedback(id: number): Observable<Feedback> {
    return this.restangular.one('feedback',id).get();
  }

  // You construct a Restangular object for feedback 
  // and call the post() method on that object with the Feedback object as the parameter
  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedback);
  }

}
