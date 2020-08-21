import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo', //boa pratica prefixar componente (ap = alurapic)
    templateUrl: './photo.component.html',
    
})
export class PhotoComponent { 
    
    @Input() description = ''

    @Input() url= ''
}