import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule} from 'primeng/inputmask';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CalendarModule } from 'primeng/calendar';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    FieldsetModule,
    ToastModule,
    CalendarModule,
    PaginatorModule,
    InputMaskModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
