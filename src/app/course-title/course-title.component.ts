import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css']
})
export class CourseTitleComponent implements OnInit {

  title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
