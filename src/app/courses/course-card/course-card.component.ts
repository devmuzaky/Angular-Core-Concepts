import {
  Attribute, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../courses.service';
import {HighlightedDirective} from "../directives/highlighted.directive";


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

  @Input() course!: Course;
  @Input() cardIndex!: number;
  @Output('courseChanged') courseEmitter = new EventEmitter<Course>();

  @Input()
  highlighter!: HighlightedDirective;

  @ViewChild('cardTitle', {static: true, read: ElementRef}) cardTitle!: ElementRef;

  constructor(private coursesService: CoursesService, @Attribute('type') private type: string) {
  }


  ngOnInit() {
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({...this.course, description});
  }
}
