import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "src/app/core/auth/auth.service";
import { Router } from "@angular/router";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";


@Component({
    // selector: 'ap-signin' |//? page scope, doesn't require selector
    templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement> //html wrapper

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {
        console.log('usuario logou');

        const userName = this.loginForm.get('userName').value
        const password = this.loginForm.get('password').value

        this.authService
            .authenticate(userName, password)
            .subscribe(() => this.router.navigate(['user', userName]),
                err => {
                    console.log(err)
                    this.loginForm.reset()

                    this.platformDetectorService.isPlatformBrowser() &&
                            this.userNameInput.nativeElement.focus()

                    console.log('erro de login');
                }
            )
    }
}