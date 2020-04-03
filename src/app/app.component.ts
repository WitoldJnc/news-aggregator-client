import {Component, OnInit} from "@angular/core";
import {NewsService} from "./service/news.service";
import {Router} from "@angular/router";
import {SharedService} from "./service/shared.service";
import {Content} from "./model/Content";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    resources: Array<string>;
    content: Array<Content>;
    resForm: FormGroup;

    constructor(private newsService: NewsService,
                private router: Router,
                private shared: SharedService,
                private fb: FormBuilder) {

        this.resForm = this.fb.group({
            resources: [''],
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


    private navigateTo(value: any) {
        if (value === 'all') {
            this.router.navigate(['/res/all']);
            this.shared.onCatigoriesInit.emit('all');
            this.shared.onContentInit.emit(this.content);
            return;
        }
        this.router.navigate(['/res/', value]);
        this.shared.onCatigoriesInit.emit(value);
        this.shared.onContentInit.emit(this.content.filter(x => x.resource === value))
    }

}


