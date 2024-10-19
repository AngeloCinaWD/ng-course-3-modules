import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import { CoursesService } from "./courses.service";

// il CommonModule contiene tutte le direttive di ng, in app.module.ts non c'è perchè è una dipendenza del BrowserModule
// per utilizzare questo modulo lo dobbiamo importare e registrare negli imports di app.module.ts
// per creare un modulo a se stante devo spostare nella cartella src/app/courses tutto quello che dovò importare qui e registrarlo nelle declarations
@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
  ],
  imports: [CommonModule],
  // tutto quello che deve essere visibile all'esterno del modulo deve essere indicato qui
  exports: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
  ],
  providers: [CoursesService],
})
export class CoursesModule {}
