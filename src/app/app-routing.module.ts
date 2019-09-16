import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import(`~/app/home/home.module`).then(m => m.HomeModule) },
    { path: "browse", loadChildren: () => import(`~/app/browse/browse.module`).then(m => m.BrowseModule) },
    { path: "search", loadChildren: () => import(`~/app/search/search.module`).then(m => m.SearchModule) },
    { path: "featured", loadChildren: () => import(`~/app/featured/featured.module`).then(m => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import(`~/app/settings/settings.module`).then(m => m.SettingsModule) },

    { path: "employment", loadChildren: () => import(`~/app/employment/employment.module`).then(m => m.EmploymentModule) },
    { path: "training-education", loadChildren: () => import(`~/app/training-education/training-education.module`).then(m => m.TrainingEducationModule) },
    { path: "detail", loadChildren: () => import(`~/app/detail/detail.module`).then(m => m.DetailModule) },

    { path: "map", loadChildren: () => import(`~/app/map/map.module`).then(m => m.MapModule) },
    { path: "housing", loadChildren: () => import(`~/app/housing/housing.module`).then(m => m.HousingModule) },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
