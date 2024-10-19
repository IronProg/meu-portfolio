import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-contato-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './contato-page.component.html',
  styleUrl: './contato-page.component.css'
})
export class ContatoPageComponent {
}
