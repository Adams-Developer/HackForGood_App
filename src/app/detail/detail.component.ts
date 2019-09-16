import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "TrainingEducation",
    moduleId: module.id,
    templateUrl: "./detail.component.html",
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
    selected = {};

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.selected = JSON.parse(params["selected"]);
        });
    }

    ngOnInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
