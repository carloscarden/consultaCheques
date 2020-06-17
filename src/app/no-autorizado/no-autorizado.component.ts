import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../_services';
import { Role } from '../_models/role';

@Component({
  selector: 'app-no-autorizado',
  templateUrl: './no-autorizado.component.html',
  styleUrls: ['./no-autorizado.component.scss']
})
export class NoAutorizadoComponent implements OnInit {
  myForm: FormGroup;
  hide = true;
  rol;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitHandler() {
    const formValue = this.myForm.value;
    this.authService.login(formValue.email, formValue.password).subscribe(
      (d: any) => {
        // this.authService.currentUserRoles;
        console.log('datos');
        this.router.navigateByUrl('/roles');
      },
      error => {
        console.log('error');
      }
    );
  }

}
