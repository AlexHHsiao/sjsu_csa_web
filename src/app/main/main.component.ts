import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('home') homeComp: ElementRef;
  @ViewChild('who') whoComp: ElementRef;
  @ViewChild('memories') memoriesComp: ElementRef;
  @ViewChild('structure') structureComp: ElementRef;
  @ViewChild('gallery') galleryComp: ElementRef;

  isScrolling: boolean;

  constructor() {
    this.isScrolling = false;
  }

  ngOnInit() {
  }

  scrollToComponent(selection: String) {

    if (this.isScrolling) {



      const waitScroll = setInterval(() => {
        if (!this.isScrolling) {
          this.scrollToComponent(selection);
          clearInterval(waitScroll);
        }
      }, 10);
    } else {

      this.isScrolling = true;

      switch (selection) {
        case 'H': {
          this.smoothScroll(window.scrollY, 0);
          break;
        }

        case 'W': {
          this.smoothScroll(window.scrollY, this.whoComp.nativeElement.offsetTop);
          break;
        }

        case 'M': {
          this.smoothScroll(window.scrollY, this.memoriesComp.nativeElement.offsetTop);
          break;
        }

        case 'C': {
          this.smoothScroll(window.scrollY, this.structureComp.nativeElement.offsetTop);
          break;
        }

        case 'G': {
          this.smoothScroll(window.scrollY, this.galleryComp.nativeElement.offsetTop);
          break;
        }

        default: {
          break;
        }
      }
    }
  }

  smoothScroll(currentY, targetY) {

    if (currentY > targetY) {

      const distance = currentY - targetY;
      let changeDistance = currentY - targetY;

      const scrollIntervet = setInterval(() => {

        changeDistance -= distance / 100;
        window.scrollTo(0, targetY + changeDistance);

        if (changeDistance <= 0) {
          window.scrollTo(0, targetY);
          this.isScrolling = false;
          clearInterval(scrollIntervet);
        }

      }, 5);

    } else if (currentY < targetY) {

    }
  }

  @HostListener('window:scroll', []) onScroll() {
    console.log(window.scrollY);
  }
}
