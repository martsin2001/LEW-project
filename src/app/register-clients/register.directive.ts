import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[full-name]'
})
export class NameDirective {
    constructor(private element: ElementRef){
        
    }
}