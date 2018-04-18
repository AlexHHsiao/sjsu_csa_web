import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('home') homeSelection: ElementRef;
  @Output() scrollToComponent = new EventEmitter<String>();

  currentSelection: any;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    this.currentSelection = this.homeSelection.nativeElement;

    this.renderer.setStyle(this.currentSelection, 'border-bottom', '5px solid #5c8bff');
    this.renderer.setStyle(this.currentSelection, 'line-height', '35px');
    this.renderer.setStyle(this.currentSelection, 'height', '35px');
  }

  selectMenu(selection: string, event: Event) {

    if (this.currentSelection) {
      this.renderer.setStyle(this.currentSelection, 'border-bottom', 'none');
      this.renderer.setStyle(this.currentSelection, 'line-height', '40px');
      this.renderer.setStyle(this.currentSelection, 'height', '40px');
    }

    this.currentSelection = event.target;
    this.renderer.setStyle(this.currentSelection, 'border-bottom', '5px solid #5c8bff');
    this.renderer.setStyle(this.currentSelection, 'line-height', '35px');
    this.renderer.setStyle(this.currentSelection, 'height', '35px');

    this.scrollToComponent.emit(selection);
  }

  applyHover(event: Event) {
    if (event.target !== this.currentSelection) {
      this.renderer.setStyle(event.target, 'line-height', '25px');
    }
  }

  removeHover(event: Event) {
    if (event.target !== this.currentSelection) {
      this.renderer.setStyle(event.target, 'line-height', '40px');
    }
  }

}

