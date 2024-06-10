import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]',
  standalone: true
})
export class OutsideClickDirective {
  @Output() appOutsideClick = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Document clicked', event); // Debugging line
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.appOutsideClick.emit(event);
    }
  }
}