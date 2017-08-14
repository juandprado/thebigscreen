import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Location } from '@angular/common';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  private searchTerms = new Subject<string>();
  constructor(private router: Router, private location: Location) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    if (term.length >= 1) {
      let link = ['/movie-search', term];
      this.router.navigate(link);
    } else {
      let link = ['/dashboard'];
      this.router.navigate(link);
    }

  }

  ngOnInit(): void {
  }

}
