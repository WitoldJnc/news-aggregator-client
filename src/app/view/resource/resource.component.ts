import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../../service/news.service";
import {Content} from "../../model/Content";
import {SharedService} from "../../service/shared.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

    content: Array<Content>;
    catigories: Set<string>;
    resForm: FormGroup;
    selectedCat = 'all';

    constructor(private router: Router,
                private newsService: NewsService,
                private shared: SharedService,
                private fb: FormBuilder) {

        this.resForm = this.fb.group({
            catigories: [''],
        });

    }

    ngOnInit() {
        this.initContent();
        this.initCatigories();
    }


    private initContent() {
        this.shared.onContentInit
            .subscribe(content => {
                this.content = content;
            });
    }


    private initCatigories() {
        this.shared.onCatigoriesInit
            .subscribe(resource => {
                if (resource === 'all' || resource === undefined) {
                    this.getAllCatigoriesSet();
                    return;
                } else {
                    this.getCatigoriesByResource(resource);
                }
            });
    }

    private getAllCatigoriesSet() {
        this.shared.onContentInit
            .subscribe(content => {
                const catigories = content.map(x => x.news.items
                    .map(c => c.categories.toString()));

                this.catigories = new Set(catigories.concat.apply([], catigories));
            });


    }

    private getCatigoriesByResource(resource: any) {
        this.shared.onContentInit
            .subscribe(content => {
                const catigories = content
                    .filter(x => x.resource === resource)
                    .map(c => c.news.items
                        .map(v => v.categories.toString()));

                this.catigories = new Set(catigories.concat.apply([], catigories));
            });


    }

    changeSelect() {
        this.selectedCat = this.resForm.value.catigories;
    }
}
