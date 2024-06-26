import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.page.html',
    styleUrls: ['./<%= dasherize(name) %>.page.scss']
})
export class <%= classify(name) %>Page implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
