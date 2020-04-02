import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Content} from "../model/Content";

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = environment.serviceUrl;
    }


    public getAllRss(): Observable<Content[]> {
        return this.http.get<Content[]>(this.url + 'rss');
    }

    public getCatigories(): Observable<string[]> {
        return this.http.get<string[]>(this.url + 'catigories');
    }

    public getResources(): Observable<string[]> {
        return this.http.get<string[]>(this.url + 'resources');
    }

    public getNewsByResource(resource: string): Observable<Content> {
        return this.http.get<Content>(this.url + '/res/' + resource);
    }
}
