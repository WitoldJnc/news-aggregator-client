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
        this.initNews();

    }

    private initNews() {
        this.shared.onMainEvent
            .subscribe(data => {
                this.news = this.shared.contentList.filter(x => x.resource === data)[0];
            });
    }

}
