import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { t } from "@angular/core/src/render3";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    //output property has to be the same name as de custom event on the parent html.
    @Output() onTyping = new EventEmitter<string>()
    @Input() value: string = ''
    debounce: Subject<string> = new Subject<string>()
    TIMEOUT_BEFORE_SEARCH: 300

    ngOnInit() {
        this.debounce
            .pipe(debounceTime(this.TIMEOUT_BEFORE_SEARCH))
            .subscribe(filter => this.onTyping.emit(filter))
    }

    ngOnDestroy() {
        this.debounce.unsubscribe()
    }
}