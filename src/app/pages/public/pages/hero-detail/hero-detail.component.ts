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

  user: UserInterface;
  userName: string;
  form: FormGroup;
  submitted: boolean;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private location: Location) { }

  ngOnInit(): void {
    this.getHero();
    this.userName = this.user.name;
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      userName: [this.userName, Validators.required]
    });
  }

  onUserInputChange(evt): void {
    this.userName = evt.target.value;
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUserById(id);
  }

  saveUser(): void {
    if (this.form.valid) {
      this.submitted = true;
      this.user.name = this.userName;
      this.userService.changeUser(this.user);
      this.backOnPrevious();
    }
  }

  backOnPrevious() {
    this.location.back();
  }
}
