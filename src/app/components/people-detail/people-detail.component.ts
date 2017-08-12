import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { People } from '../../classes/people';
import { Movie } from '../../classes/movie';
import { PeopleService } from '../../services/people.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  constructor (
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}
  @Input() people: People;
  @Input() peopleCast: Movie[];
  @Input() peopleCrew: Movie[];
  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.peopleService.getPerson(+params['id']))
    .subscribe(people => this.people = people);
    this.route.params
    .switchMap((params: Params) => this.peopleService.getParticipationCast(+params['id']))
    .subscribe(peopleCast => this.peopleCast = peopleCast);
    this.route.params
    .switchMap((params: Params) => this.peopleService.getParticipationCrew(+params['id']))
    .subscribe(peopleCrew => this.peopleCrew = peopleCrew);
  }
  goBack(): void {
    this.location.back();
  }

}
