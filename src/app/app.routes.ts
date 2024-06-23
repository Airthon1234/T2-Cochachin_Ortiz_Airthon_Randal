import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';
import { HomeComponent } from './dashboard/home/home.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        children: [
            {path: "home", component: HomeComponent}
        ]
    },
    {path: "", redirectTo:"login", pathMatch: "full"}
];
