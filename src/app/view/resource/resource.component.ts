import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../../service/news.service";
import {Content} from "../../model/Content";
import {SharedService} from "../../service/shared.service";

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

    news: Content;

    constructor(private router: Router,
                private newsService: NewsService,
                private shared: SharedService) {


    }

    ngOnInit() {
        this.emite();
    }

    private emite() {
        this.shared.onMainEvent.subscribe(news => {
            this.getNewsByResource(news);
        });
    }

    private getNewsByResource(res: any) {
        this.newsService.getNewsByResource(res)
            .subscribe(data => {
                this.news = data;
            });
    }
}
