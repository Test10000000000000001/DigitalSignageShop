import { FormGroup } from "@angular/forms";
import { FormElementTypes } from "../enums/form-element-types.enum";
import { IFormElement } from "../interfaces/iformelement";

export class InputElement implements IFormElement {
    group: FormGroup;
    type: string;
    label: string;
    name: string;
    disabled: boolean;
    placeholder: string;

    constructor(label: string, name: string, group: FormGroup, disabled?: boolean, placeholder?: string) {
        this.type = FormElementTypes._TEXT;
        this.name = name;
        this.group = group;
        this.label = label;
        this.placeholder = placeholder;
    }
    
    display(): any {
        const template = `<div class="form-group" [formGroup]="group">
                                <label for="name">${this.label}</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="${this.name}" name="${this.name}" ${this.disabled? "disabled" : ""} formControlName="${this.name}">
                                </div>
                            </div>`;
        return template;
    }
}
