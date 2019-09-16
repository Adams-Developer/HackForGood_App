import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HousingRoutingModule } from "./housing-routing.module";
import { HousingComponent } from "./housing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HousingRoutingModule
    ],
    declarations: [
        HousingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HousingModule { }
