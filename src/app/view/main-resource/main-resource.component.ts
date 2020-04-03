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
    catigories: Array<string>;


    constructor(private newsService: NewsService,
                private shared: SharedService) {

    }

    ngOnInit() {
        this.initContentList();

    }


    private initContentList() {
        this.content = this.shared.contentList;
    }
}
