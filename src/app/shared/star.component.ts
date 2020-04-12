import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number;
    starWidth: number;

    @Output()
    notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    public onClick(): void {
        console.log("Star rating button clicked in star component.");
        this.notify.emit(this.rating.toString());
    }
}