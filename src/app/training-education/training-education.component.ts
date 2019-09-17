import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { DeviceType } from "tns-core-modules/ui/enums";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "TrainingEducation",
    moduleId: module.id,
    templateUrl: "./training-education.component.html"
})
export class TrainingEducationComponent implements OnInit {
    
    isTablet: boolean = device.deviceType === DeviceType.Tablet;
    data = [];
    selected = {};

    constructor(private router: Router) {}
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    select(args) {
        this.selected = this.data[args.index];

        // For phone users we need to navigate to another page to show the detail view.
        if (!this.isTablet) {
            this.router.navigate(["/detail"], {
                queryParams: { selected: JSON.stringify(this.selected) }
            });
        }
    }

    ngOnInit(): void {
        this.data.push({
            name: "Learning Centers",
            src: "https://i.ibb.co/mcZq3BX/pencil-918449-640.jpg",
            description: "Learning Centers are located in our Permanent Housing locations. There, women can access internet-enabled computers, group activities and one-on-one engagement with staff and volunteers. These opportunities provide women access to the humanities, life and job skills training, social-emotional development and basic adult education."
        });
        this.data.push({
            name: "Resume Workshop",
            src: "https://i.ibb.co/9ckFxx9/cv-4043315-1280.png",
            description: "At our workshop, we offer a resource for job seekers. We provide a step-by-step process for creating an effective resume."
        });
        this.data.push({
            name: "CPR Certification",
            src: "https://i.ibb.co/k1S7T9Z/first-aid-1040283-960-720.png",
            description: "CPR can help save lives – and it's something that virtually anyone can learn how to perform." +
                "That's why we offer CPR classes in Chicago that are designed for a variety of learning styles. With online," +
                "in-person, and blended Simulation Learning courses, you can train entirely in an online environment, " + 
                "in a traditional classroom setting, or enroll in a class that blends online coursework with an in-person skills session." +
                "Regardless of which type of class you choose, you'll learn the latest proven science and techniques" +
                " – and gain the skills and confidence needed to help during times of crisis."
        });
        this.data.push({
            name: "CNA Programs",
            src: "https://i.ibb.co/kXj2Dgh/report-2704732-960-720.png",
            description: "Several programs in Chicago offer a 6-12 week Certified Nursing Training programs. The CNA program involves classroom instruction that could be lectures, live demonstrations and applications.We are here to help you learn more about the program and enroll in classes."
        });

        this.data.push({
            name: "CDL Training",
            src: "https://i.ibb.co/WyNCgkx/truck-3401529-1280.jpg",
            description: "The Commercial Driver Training certificate program is designed for individuals with little or no commercial driving experience. " +
            "The Commercial Driver Training program trains students for entry level employment as commercial motor vehicle operators. " +
            "In partnership with the Illinois Department of Transportation (IDOT), this program prepares students to obtain a Commercial Driver’s License in the State of Illinois.​" + ('\n') +
            ('\n') +
            "Class offered at: Olive-Harvey Community College "
        });
      
    }
}
