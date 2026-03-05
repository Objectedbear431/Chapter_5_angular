import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../bank';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({ 
 standalone: true, 
 imports: [UpperCasePipe, NgIf], 
 selector: 'app-bank-detail', 
 templateUrl: './bank-detail.component.html', 
 styleUrls: ['./bank-detail.component.css']
})

export class BankDetailComponent implements OnInit { 
  @Input() bank!: Bank;
  constructor() { }
  ngOnInit(): void { }
}