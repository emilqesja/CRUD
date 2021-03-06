import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Angular Material
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

//Components
import { AppComponent } from './app.component';
import { UsersComponent } from './users-dashboard/users/users.component';
import { EditDialogComponent } from './users-dashboard/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './users-dashboard/delete-dialog/delete-dialog.component';
import { AddUserDialogComponent } from './users-dashboard/add-user-dialog/add-user-dialog.component';

//Modules
import { AppRoutingModule } from './app-routing.module';

//Services
import { InterceptorService } from './services/interceptor.service';

//JWT Imports
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddUserDialogComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //Angular Material
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    //Toastr Module
    ToastrModule.forRoot(),
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
