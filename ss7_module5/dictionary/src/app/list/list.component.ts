import {Component, OnInit} from '@angular/core';
import {IDictionary} from '../model/IDictionary';
import {ServiceService} from '../dictionaryService/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dictionaryForm: IDictionary[];

  constructor(private dictionaryService: ServiceService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionaryForm = this.dictionaryService.getAll();
  }

}
