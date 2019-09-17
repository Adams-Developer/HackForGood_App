import { Component, OnInit } from "@angular/core";
import { isIOS } from "tns-core-modules/platform";
import { Color } from "color";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Map",
    moduleId: module.id,
    templateUrl: "./map.component.html"
})
export class MapComponent implements OnInit {
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    items: { name: string, desc: string, price: string, imageSrc: string, time: string  }[] = [
        { name: "Logan Square Farmers Market", desc: "Every Sunday: May 13-October 28", price: "Link/SNAP", imageSrc: "https://i.ibb.co/C9PL5gC/65631802-381445825838986-9182125854794460879-n-jpg-nc-ht-scontent-iad3-1-cdninstagram.jpg", time: "10am - 3pm"},
        { name: "NMS Food Pantry", desc: "Every Thursday", price: "Free", imageSrc: "https://i.ibb.co/rHp60P6/vegetables-1584999-1280.jpg", time: "4pm - 6pm" },
        { name: "Mt. Vernon Baptist Church", desc: "Every Thursday", price: "Free", imageSrc: "https://i.ibb.co/QbzW3qQ/veggies-646107-1280.jpg", time:"10am - 12 noon" },
        { name: "Marillac House Food Pantry", time:"Fri 10am-12:30pm", desc: "Mon. 11am-1:30pm, Wed. 3pm-6pm", price: "Free", imageSrc: "https://i.ibb.co/QMz8c2L/agriculture-1851424-1280.jpg" },
        { name: "51st Wood Street Farmers Market", desc: "Every Sunday: May 5–November 24", price: "Link/SNAP", time:"9am-12pm", imageSrc: "https://i.ibb.co/yFDZv8T/potatoes-411975-1280.jpg" },
        { name: "95th Street Farmers Market", desc: "Every Sunday: May 5–October 27", price: "Link/SNAP", time:"8am-1pm", imageSrc: "https://i.ibb.co/9TpC2h5/marilla.jpg" },
        { name: "Lawndale Farm Stand", desc: "Every Wednesday: ", price: "Link/SNAP", imageSrc: "https://i.ibb.co/17cbC4V/pinto-bean-3728767-1280.jpg", time: "9am-1pm" },
        { name: "Green City Market Lincoln Park", desc: "Saturday: May 4-Oct 26", time:"7am-1pm", price: "Link/SNAP", imageSrc: "https://i.ibb.co/jzyNW4j/farmers-market-louise.jpg" },
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onItemLoading(args) {
        // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
        if (isIOS) {
            var newcolor = new Color("#e6e6e6");
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    }
}
