import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    template: `<page-router-outlet></page-router-outlet>`
    /*template:
    `
    <RadSideDrawer>
        <StackLayout tkDrawerContent background="grey">
            <Label text="MENU"></Label>
        </StackLayout>
        <StackLayout tkMainContent>
            <page-router-outlet></page-router-outlet>
        </StackLayout>
    </RadSideDrawer>
    `*/
})

export class AppComponent { }
