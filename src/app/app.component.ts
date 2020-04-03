import {Component, OnInit} from "@angular/core";
import {NewsService} from "./service/news.service";
import {Content} from "./model/Content";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedService} from "./service/shared.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    content: Array<Content>;
    resources: Array<string>;
    catigories: Set<string>;

    resForm: FormGroup;

    constructor(private newsService: NewsService,
                private router: Router,
                private shared: SharedService,
                private fb: FormBuilder) {

        this.resForm = this.fb.group({
            catigories: [''],
        });

    }

    ngOnInit() {
        this.getAllRss();

    }

    private getAllRss() {
        this.newsService.getAllRss()
            .subscribe(content => {
                this.content = content;
                this.resources = content.map(x => x.resource);
            });
    }


    private setCatigories(resource: string) {

    }

    private getCatigoriesByResouce(resouce: string) {

    }


    private getAllCatigories() {

    }


    private navigateTo(value: any) {
        this.shared.contentList = this.content;

        if (value === 'all') {
            this.router.navigate(['/main']);
            return;
        }
        this.shared.onMainEvent.emit(value);
        this.router.navigate(['/res/', value]);
    }



}


