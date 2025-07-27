import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptor } from './core/jwt-interceptor';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';

// ✅ Define this function outside @NgModule
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    UsersModule,
    ContentModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: ['localhost:5001/api/auth/login']
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
