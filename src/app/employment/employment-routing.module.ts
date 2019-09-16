import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EmploymentComponent } from "./employment.component";

const routes: Routes = [
    { path: "", component: EmploymentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EmploymentRoutingModule { }
