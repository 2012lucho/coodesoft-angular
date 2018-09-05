import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @HostListener("window:scroll", ['$event'])
  OnWindowsScroll($event:Event){
    this.pageY = ($event as any).pageY;
    if (this.pageY > this.screenHeight){
      this.fixedTop = true;
    } else {
      this.fixedTop = false;
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.screenHeight = window.innerHeight;
  }

  screenHeight;
  pageY;

  fixedTop = false;

  constructor() { }

  ngOnInit() {
    this.onResize();
  }

}
