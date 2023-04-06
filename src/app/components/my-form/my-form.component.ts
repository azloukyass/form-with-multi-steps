import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormlyFormOptions} from '@ngx-formly/core';
import {StepType} from '../../models/step-type';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  activedStep = 0;

  model = {};
  steps: StepType[] = [];
  form: any;
  options: any;

  constructor() { }

  ngOnInit() {
   this.setSteps();
  }

  private setSteps(): void {
    this.steps = [
      {
        label: 'Personal data',
        fields: [
          {
            key: 'firstname',
            type: 'input',
            templateOptions: {
              label: 'First name',
              required: true,
            },
          },
          {
            key: 'age',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: 'Age',
              required: true,
            },
          },
        ],
      },
      {
        label: 'Destination',
        fields: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: true,
            },
          },
        ],
      },
      {
        label: 'Day of the trip',
        fields: [
          {
            key: 'day',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Day of the trip',
              required: true,
            },
          },
        ],
      },
    ];
    this.form = new FormArray(this.steps.map(() => new FormGroup({})));
    this.options = this.steps.map(() => <FormlyFormOptions> {});
  }

  prevStep(step: number) {
    this.activedStep = step - 1;
  }

  nextStep(step: number) {
    this.activedStep = step + 1;
  }

  submit() {
    console.log(this.form);
  }
}
