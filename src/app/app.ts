import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header';
import { Aside } from './features/home/aside/aside';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Aside],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
