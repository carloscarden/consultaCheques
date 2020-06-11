import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../_services';
import { Role } from '../_models/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  myForm: FormGroup;

  rolesAmostrar: Role[];
  habilitado = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
        // authorised so return true
        this.rolesAmostrar=this.authService.currentUserRoles;
        this.habilitado= true;
    }
    
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  submitHandler(){
    const formValue = this.myForm.value;
    this.authService.login(formValue.email, formValue.password).subscribe(
      (d:any) =>{
        this.habilitado = true;
        this.rolesAmostrar=this.authService.currentUserRoles;
      },
      error => {
        console.log('error');
      }
    )
  }


  entrar(){
    this.router.navigateByUrl('/busqueda');
  }

}
