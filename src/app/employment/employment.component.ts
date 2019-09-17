import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Employment",
    templateUrl: "./employment.component.html"
})
export class EmploymentComponent implements OnInit {

    data = [];

    constructor() {
        // Use the component constructor to inject providers.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    ngOnInit(): void {
        this.data.push({ heading: "Certified Nursing Assistance 3p-11p", content: "Certified Nursing Assistants provide basic nursing care to patients and residents within the scope of the nursing assistant responsibilities and performs basic nursing procedures under the direction of the licensed nurse supervisor.", location: "Chicago, IL", createdBy: "a link here?" });
        this.data.push({ heading: "CNA", content: "Certified Nursing Assistants provide basic nursing care to patients and residents within the scope of the nursing assistant responsibilities and performs basic nursing procedures under the direction of the licensed nurse supervisor." ,location: "Chicago, IL" });
        this.data.push({ heading: "Dietary Aide", content: "2nd shift full and part time positions available. Must be able to pass drug screen.", location: "Chicago, IL" });
        this.data.push({ heading: "Dishwasher", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." });
        this.data.push({ heading: "Cook", content: " Duties include prep and serving of meals for various diets" });
        this.data.push({ heading: "Store Associate", content: "Responsible for merchandising product, monitoring inventory and keeping the store looking its best" });
        this.data.push({ heading: "Sanitation Aide", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." });
        this.data.push({ heading: "Full Time Delivery Associate", content: "Amazon Logistics (AMZL) delivers packages and smiles to Amazon customers every day." });
        this.data.push({ heading: "Warehouse Team Member", content: "In this active job you sort packages into routes to ensure we meet the customer promised delivery time." });
    }

    onApply() {
        
    }
}
