import { Component } from '@angular/core';
import { CuFormComponent } from "../cu-form/cu-form.component";
import { MenuComponent } from "../../shared/menu/menu.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-createcard',
    standalone: true,
    templateUrl: './createcard.component.html',
    styleUrl: './createcard.component.css',
    imports: [CuFormComponent, MenuComponent, HeaderComponent]
})
export default class CreatecardComponent {

}
