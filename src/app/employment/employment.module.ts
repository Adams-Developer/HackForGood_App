import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EmploymentRoutingModule } from "./employment-routing.module";
import { EmploymentComponent } from "./employment.component";

//card list view
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from '@nstudio/nativescript-cardview';
registerElement('CardView', () => CardView);

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EmploymentRoutingModule
    ],
    declarations: [
        EmploymentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EmploymentModule { }
