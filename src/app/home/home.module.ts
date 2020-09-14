import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ValidationMessageModule } from "../shared/components/validation-message/validation-message.module";

@NgModule({
    declarations: [SigninComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        ValidationMessageModule,
        RouterModule
    ]
    // exports: [SigninComponent]
    //? page scope,doesn't require exports
})
export class HomeModule {

}