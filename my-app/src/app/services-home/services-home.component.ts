import { Component } from '@angular/core';
import { HighlightDirective } from "./highlight.directive";

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.css'
})
export class ServicesHomeComponent {

}
