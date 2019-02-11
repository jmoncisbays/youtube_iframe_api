import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators  } from "@angular/forms"
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { Exercise } from '../../models/exercise.model';
import { ExercisesRepository } from '../../repositories/exercises.repository';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public exerciseForm: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(private exercisesRepository: ExercisesRepository, private router: Router) {
    this.exerciseForm = new FormGroup({
      'category': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'videoId': new FormControl('', Validators.required),
      'reps': new FormControl('', Validators.required),
      'sets': new FormControl('', Validators.required),
      'hold': new FormControl('', Validators.required)
    });
  }

  ngOnInit() { }

  get categoryControl() {
    return this.exerciseForm.get("category");
  }

  get nameControl() {
    return this.exerciseForm.get("name");
  }

  get descriptionControl() {
    return this.exerciseForm.get("description");
  }

  get videoIdControl() {
    return this.exerciseForm.get("videoId");
  }

  get repsControl() {
    return this.exerciseForm.get("reps");
  }

  get setsControl() {
    return this.exerciseForm.get("sets");
  }

  get holdControl() {
    return this.exerciseForm.get("hold");
  }

  save() {
    let exercise: Exercise= this.exerciseForm.value;
    this.exercisesRepository.add(exercise).subscribe(data => {
      this.router.navigate(["details"]);
    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
