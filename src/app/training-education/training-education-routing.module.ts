import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TrainingEducationComponent } from "./training-education.component";

const routes: Routes = [
    { path: "", component: TrainingEducationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TrainingEducationRoutingModule { }
