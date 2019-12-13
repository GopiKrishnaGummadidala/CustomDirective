import { Component, Renderer2, AfterViewInit, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CustomDirectivePoc';
  private isClassAdded = false;
  private customizeElements: any = [];
  constructor(private renderer: Renderer2) { }

  public ngOnInit(): void {
    this.customizeElements = document.querySelectorAll('[ssh-customize]');
  }

  customize(): void {
    const inputElements = document.querySelectorAll('input,select,textinputarea');
    this.isClassAdded = !this.isClassAdded;
    if (this.isClassAdded) {
      this.customizeElements.forEach(element => {
        this.renderer.addClass(element, 'border-top-me');
        inputElements.forEach(inputElement => {
          this.renderer.setAttribute(inputElement, 'disabled', 'true');
        });
        element.addEventListener('click', this.onClick, true);
     });
    } else {
      this.customizeElements.forEach(element => {
        element.removeEventListener('click', this.onClick, true);
        inputElements.forEach(inputElement => {
          this.renderer.removeAttribute(inputElement, 'disabled');
        });
        this.renderer.removeClass(element, 'border-top-me');
        this.renderer.removeAttribute(element, 'disabled');
     });
    }
    console.log(this.customizeElements);
  }

  onClick(event: any) {
    alert(event.target.getAttribute('id'));
    event.stopImmediatePropagation();
  }
}
