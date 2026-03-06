import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from "./highlight.directive";
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-services-home',
  standalone: true,
  imports: [HighlightDirective, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.css'
})

export class ServicesHomeComponent implements OnInit {
  color = '';
  bankingServices: any[] = [
    {
      "type": 'Issue business loans',
      "years": 2,
      "category": "loans"
    },
    {
      "type": 'Provide periodic reports and analysis',
      "years": 7,
      "category": "reports"
    },
    {
      "type": 'Open new checking and/or saving accounts',
      "years": 5,
      "category": "financial_accounts"
    },
    {
      "type": 'Guide clients through their savings, loan, mortgage, and retirement options',
      "years": 6,
      "category":"options"
    }
  ];

  ngOnInit(): void { }
}
