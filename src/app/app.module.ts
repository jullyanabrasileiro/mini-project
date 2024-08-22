import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideNavComponent,
    TaskComponent,
    TasksComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      
  ],
  exports: [],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"mini-project-angular-basics","appId":"1:198997744403:web:96d7a9a87f94545fc118e6","storageBucket":"mini-project-angular-basics.appspot.com","apiKey":"AIzaSyDMuyfDifcXMAMKfynl0T-OFA8xwCa4H4U","authDomain":"mini-project-angular-basics.firebaseapp.com","messagingSenderId":"198997744403","measurementId":"G-H7V1ZFLFH4"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}