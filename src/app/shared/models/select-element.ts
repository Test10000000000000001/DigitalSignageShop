import { FormGroup } from "@angular/forms";
import { FormElementTypes } from "../enums/form-element-types.enum";
import { IFormElement } from "../interfaces/iformelement";

export class SelectElement implements IFormElement {
    group: FormGroup;
    type: string;
    label: string;
    name: string;
    disabled: boolean;
    placeholder: string;
    options: any;

    constructor(label: string, name: string, options: any, group: FormGroup, disabled?: boolean, placeholder?: string) {
        this.type = FormElementTypes._SELECTBOX;
        this.name = name;
        this.group = group;
        this.label = label;
        this.placeholder = placeholder;
        this.options = options;
    }
    
    display(): any {
        let template = `<div class="form-group" [formGroup]="group">
                                <label for="name">${this.label}</label>
                                <div class="input-group">`;
        template += `<select [group]="form" class="form-control" id="${this.name}" name="${this.name}" ${this.disabled? "disabled" : ""} formControlName="${this.name}">`;
        let option = `<option value="">Bitte wählen ...</option>`;
        template += option;
        this.options.forEach((element, i) => {
            option = `<option value="${element.key}">${element.value}</option>`;
            template += option;
        });
        template +=  `</div>
                        </div>`;

        return template;
    }
}
