import {Component, Inject, Injector, OnInit, ViewChild} from '@angular/core';
import {Course} from './model/course';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  courses: Course[] = COURSES;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector) {

  }

  ngOnInit() {

    const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

    customElements.define('course-title', htmlElement);

  }
  ngAfterViewInit() {
  }

  onEditCourse() {

    this.courses[1].category = 'ADVANCED';

  }


  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      );
  }
}
