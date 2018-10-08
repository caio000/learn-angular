import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

    public aba: string;

    constructor() {
        this.aba = 'home';
    }

    ngOnInit() {
    }

}
