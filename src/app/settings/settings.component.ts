import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as email from "nativescript-email";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls:['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    toEmail;
    ccEmail;
    bccEmail;
    subject;
    message;
    name;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onEmailSend(): void {
        // basic validation
        if (!this.subject || !this.message || !this.toEmail) {
            alert("Please enter all required fields!");
            return;
        }

        email.compose({
            subject: this.subject,
            body: this.message,
            to: [this.toEmail],
            cc: [this.ccEmail ? this.ccEmail : ' '],
            bcc: [this.bccEmail ? this.bccEmail : ' ']
        }).then(() => {
            setTimeout(() => {
                this.clearFields();
            }, 5000);
        }, err => {
            this.clearFields();
            alert("Error: " + err);
        });
    }

    clearFields(): void {
        this.toEmail = '';
        this.ccEmail = '';
        this.bccEmail = '';
        this.subject = '';
        this.message = '';
    }

}
