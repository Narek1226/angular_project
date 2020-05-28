import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserService } from 'src/app/providers/services/user/user.service';
import { UserInterface } from 'src/app/entities/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { isEqual } from 'lodash';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  hero: UserInterface = {} as UserInterface;
  heroName: string;
  form: FormGroup = this.fb.group({
    heroName: [this.heroName, Validators.required]
  });
  submitted: boolean;
  initialFormValue: object;
  isObservablesAlive = true;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit(): void {
    this.getHero();

    this.form.valueChanges
      .pipe(takeWhile(() => this.isObservablesAlive))
      .subscribe((nextFormValue): void => {
        if (this.initialFormValue && isEqual(nextFormValue, this.initialFormValue)) {
          this.form.markAsPristine();
        }
      });
  }

  ngOnDestroy(): void {
    this.isObservablesAlive = false;
  }

  onUserInputChange(event: any): void {
    this.heroName = event.target.value;
  }

  getHero(): void {
  this.route.data.subscribe((data: {heroDetails: UserInterface}) => {
    this.hero = data.heroDetails;
    this.heroName = this.hero.title;
    this.form.get('heroName').patchValue(this.heroName);
    this.form.markAsPristine();
    this.initialFormValue = this.form.value;
  });
  }

  saveUser(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.hero.title = this.heroName;
      this.userService.changeUser(this.hero).subscribe(() => {
        this.location.back();
      });
    }
  }
}
