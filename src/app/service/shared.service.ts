import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    onMainEvent = new EventEmitter();

}