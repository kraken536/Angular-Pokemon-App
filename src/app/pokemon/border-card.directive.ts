import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#009688';
  private defaultColor: string = '#f5f5f5';
  private defaultHeight: number = 180;

  constructor(private element: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.defaultColor);
  }


  @Input('pokemonBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.initialColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultColor);
  }

  private setBorder(color: string){
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }

  private setHeight(height: number){
    this.element.nativeElement.style.height = `${height}px`;
  }

}
