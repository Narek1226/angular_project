import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: UserInterface = {} as UserInterface;
  userName: string;
  form: FormGroup = this.fb.group({
    userName: [this.userName, Validators.required]
  });
  submitted: boolean;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  onUserInputChange(event: any): void {
    this.userName = event.target.value;
  }

  getHero(): void {
    this.userService.getUserById(+this.route.snapshot.paramMap.get('id')).subscribe((res) => {
      this.hero = res;
      this.userName = this.hero.title;
      this.form.get('userName').patchValue(this.userName);
    });
  }

  saveUser(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.hero.title = this.userName;
      this.userService.changeUser(this.hero).subscribe(() => {
        this.location.back();
      });
    }
  }
}
