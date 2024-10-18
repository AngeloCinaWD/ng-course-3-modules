import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { CoursesService } from "./services/courses.service";

// un modulo è un'unità organizzativa che contiene componenti, direttive, services etc che possono essere raggruppati e pubblicati indipendentemente dalla nostra app, quindi riutilizzabili
// un modulo è definito dal decoratore @NgModule() che ha 4 proprietà
// declarations: un array che contiene una lista di componenti, direttive e pipe appartenenti al modulo
// bootstrap: identifica il componente root dell'app, di solito è uno solo
// imports: ci sono i moduli dipendenti del modulo, BrowserModule contiene una serie di service per far funzionare un progetto ng nei browser, per far funzionare ngFor, ngIf etc
// providers: vengono definiti i providers per far funzionare i services, un service dichiarato qui non ha bisogno della proprietà ProvidedIn: "root" nel decoratore
@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  //   registro il provider per istanziare la classe del service CoursesService ed utilizzarne la dipendenza in qualsiasi parte del progetto (dove c'è un costruttore per la dependency injection....)
  //   providers: [provideHttpClient(withInterceptorsFromDi()), CoursesService],
})
export class AppModule {}
