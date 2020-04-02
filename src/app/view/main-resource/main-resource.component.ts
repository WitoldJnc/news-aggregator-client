import {Component, OnInit} from '@angular/core';
import {Content} from "../../model/Content";
import {NewsService} from "../../service/news.service";
import {SharedService} from "../../service/shared.service";

@Component({
    selector: 'app-main-resource',
    templateUrl: './main-resource.component.html',
    styleUrls: ['./main-resource.component.scss']
})
export class MainResourceComponent implements OnInit {
    content: Array<Content>;
    byCatigory: string;

    constructor(private newsService: NewsService, private shared: SharedService) {
        this.emiteCatigory();
    }

    ngOnInit() {
        this.getAllContent();
    }

    private emiteCatigory() {
        this.shared.onMainEvent
            .subscribe(data => {
                this.byCatigory = data;
            });
    }

    private getAllContent() {
        this.newsService.getAllRss()
            .subscribe(data => {
                this.content = data;
            });
    }
}
