import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SideNavListComponent } from './components/side-nav-list/side-nav-list.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideNavComponent,
    SideNavListComponent,
    TaskComponent,
    TasksComponent,
    LoginComponent, 
    RegisterComponent, TaskDialogComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      DragDropModule,
      MatButtonModule,
      MatDialogModule,
      MatInputModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({
      projectId: "mini-project-angular-basics",
      appId: "1:198997744403:web:96d7a9a87f94545fc118e6",
      storageBucket: "mini-project-angular-basics.appspot.com",
      apiKey: "AIzaSyDMuyfDifcXMAMKfynl0T-OFA8xwCa4H4U",
      authDomain: "mini-project-angular-basics.firebaseapp.com",
      messagingSenderId: "198997744403",
      measurementId: "G-H7V1ZFLFH4"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
