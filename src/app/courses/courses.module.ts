import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseCardComponent} from './course-card/course-card.component';
import {CourseImageComponent} from './course-image/course-image.component';
import {CoursesService} from './courses.service';
import {HighlightedDirective} from './directives/highlighted.directive';
import {FilterByCategoryPipe} from './filter-by-category.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CourseCardComponent,
      CourseImageComponent,
      HighlightedDirective,
      FilterByCategoryPipe
  ],
    exports: [
        CourseCardComponent,
        CourseImageComponent,
        FilterByCategoryPipe,
        HighlightedDirective
    ],
    providers: [CoursesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
