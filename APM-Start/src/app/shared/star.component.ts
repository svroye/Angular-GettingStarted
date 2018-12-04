import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-star",
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{



  @Input() rating: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5
  }

  onClick(){
    this.notify.emit('clicked star with rating ' + this.rating);
  }

}
