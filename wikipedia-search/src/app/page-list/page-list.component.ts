import { NgForOf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})

export class PageListComponent implements OnInit {
  @Input() pages = [];

  constructor() {}

  ngOnInit() {}
}