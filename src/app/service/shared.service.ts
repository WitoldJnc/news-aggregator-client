import {EventEmitter, Injectable} from "@angular/core";
import {Content} from "../model/Content";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    public contentList: Array<Content>;
    public catigories: Array<string>;
    public onMainEvent = new EventEmitter();


}