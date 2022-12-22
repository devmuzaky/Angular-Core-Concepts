import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css']
})
export class CourseTitleComponent implements OnInit {

  @Input()
  title!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
