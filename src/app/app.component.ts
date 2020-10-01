import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    fontsize;
    color;
    result = "";
    firstTemplate = {title: "Title1", content: "Content1", footer: "Footer1"};
    secondTemplate = {title: "Title2", content: "Content2", footer: "Footer2"};
    thirdTemplate = {title: "Title3", content: "Content3", footer: "Footer3"};
    preview = {title: "Title1", content: "Content1", footer: "Footer1"};
    selectFirstTemplate = function() {
        this.preview.title = this.firstTemplate.title;
        this.preview.content = this.firstTemplate.content;
        this.preview.footer = this.firstTemplate.footer;
    };
    selectSecondTemplate = function() {
        this.preview.title = this.secondTemplate.title;
        this.preview.content = this.secondTemplate.content;
        this.preview.footer = this.secondTemplate.footer;
    };
    selectThirdTemplate = function() {
        this.preview.title = this.thirdTemplate.title;
        this.preview.content = this.thirdTemplate.content;
        this.preview.footer = this.thirdTemplate.footer;
    };
    exportPreview = function() {
        let obj = {fontsize: this.fontsize, color: this.color};
        this.result = JSON.stringify(obj);
    };
}
