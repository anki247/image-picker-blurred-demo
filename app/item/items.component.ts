import { Component, OnInit } from "@angular/core";
import * as imagepicker from "nativescript-imagepicker";


import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    items: Item[];

    constructor() { }

    load() {
        let context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });

        context
            .authorize()
            .then(function() {
                return context.present();
            })
            .then(function(selection) {
                console.log('Size: ' + selection.length);
            }).catch(function (e) {
                // process error
            });
    }
}