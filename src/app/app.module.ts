import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {MatDatepickerModule, MAT_DATE_LOCALE} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    DragdropComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    DragDropModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{provide: MAT_DATE_LOCALE,
                useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
