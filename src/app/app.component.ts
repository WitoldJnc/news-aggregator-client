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
    catigories: Array<string>;
    resources: Array<string>;
    selectedCatigory: string;

    resForm: FormGroup;

    constructor(private newsService: NewsService,
                private router: Router,
                private fb: FormBuilder,
                private shared: SharedService
    ) {

        this.resForm = this.fb.group({
            resources: [''],
            catigories: ['']
        });
    }

    ngOnInit() {
        this.getAllResouces();
        this.getAllCatigories();
    }


    private getAllCatigories() {
        this.newsService.getCatigories()
            .subscribe(data => {
                this.catigories = data;
            });
    }

    private getAllResouces() {
        this.newsService.getResources()
            .subscribe(data => {
                this.resources = data;
            });
    }

    private navigateTo(value: any) {
        if (value === 'all') {
            this.router.navigate(['/full/main']);
            return;
        }
        this.shared.onMainEvent.emit(value);
        this.router.navigate([value]);

    }

    emitCatigory() {
        this.shared.onMainEvent.emit(this.selectedCatigory);
    }
}


