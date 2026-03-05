import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BANKS } from '../banks';
import { NgFor } from '@angular/common';
import { BankDetailComponent } from "../bank-detail/bank-detail.component";

@Component({ 
 standalone: true, 
 imports: [NgFor, BankDetailComponent], 
 selector: 'app-banks', 
 templateUrl: './banks.component.html', 
 styleUrls: ['./banks.component.css']
})

export class BanksComponent implements OnInit { 
  banks = BANKS; 
  selectedBank!: Bank;

  constructor() { }

  onSelect(bank: Bank): void { 
   this.selectedBank = bank; 
  }

  ngOnInit():  void{
  }
}