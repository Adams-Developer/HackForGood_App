import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { MapRoutingModule } from "./map-routing.module";
import { MapComponent } from "./map.component";

@NgModule({
    imports: [
        NativeScriptUIListViewModule,
        NativeScriptCommonModule,
        MapRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        MapComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapModule { }
