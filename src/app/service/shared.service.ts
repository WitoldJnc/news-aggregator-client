import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    public onContentInit = new EventEmitter();
    public onCatigoriesInit = new EventEmitter();
}