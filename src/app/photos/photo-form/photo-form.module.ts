import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PhotoFormModule {

}