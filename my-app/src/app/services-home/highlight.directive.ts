import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  standalone: true,
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight = ''
    
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
