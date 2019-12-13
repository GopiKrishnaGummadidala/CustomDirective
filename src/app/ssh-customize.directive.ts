import { Directive, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[ssh-customize]'
})
export class SshCustomizeDirective {
  private isClassAdded = false;
  icon = this.renderer.createElement('i');
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
}
