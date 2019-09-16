import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TrainingEducationRoutingModule } from "./training-education-routing.module";
import { TrainingEducationComponent } from "./training-education.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TrainingEducationRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        TrainingEducationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TrainingEducationModule { }
