import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise.model';
import { ExercisesRepository } from '../../repositories/exercises.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public exercises: Exercise[];

  constructor(private exercisesRepository: ExercisesRepository) { }

  ngOnInit() {
    this.exercisesRepository.getAll().subscribe(data => this.exercises = data);
  }
}
