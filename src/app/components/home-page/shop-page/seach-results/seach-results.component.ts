import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seach-results',
  templateUrl: './seach-results.component.html',
  styleUrls: ['./seach-results.component.css']
})
export class SeachResultsComponent implements OnInit {

  constructor() { }

  @Input() results;
 

  ngOnInit() {
  }
}
