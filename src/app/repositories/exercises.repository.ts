import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise.model';
import { Observable } from 'rxjs';

@Injectable()
export class ExercisesRepository {

  constructor() { }

  getAll(): Observable<Exercise[]> {
    return new Observable<Exercise[]>((observer) => {
      let exercises: Exercise[];

      if (localStorage.exercises_jmoncisbays) {
        exercises = JSON.parse(localStorage.exercises_jmoncisbays);
      } else {
        exercises = this.sampleData();
        localStorage.setItem("exercises_jmoncisbays", JSON.stringify(exercises));
      }

      observer.next(exercises);
      observer.complete();
    })
  };

  getByIndex(index: number): Observable<Exercise> {
    return new Observable<Exercise>((observer) => {
      this.getAll().subscribe(data => {
        observer.next(data[index]);
        observer.complete();
      });
    })    
  }

  add(exercise: Exercise): Observable<string> {
    return new Observable((observer) => {
      let exercises: Exercise[];
      
      this.getAll().subscribe(data => {
        exercises = data;
        exercises.push(exercise);
        localStorage.setItem("exercises_jmoncisbays", JSON.stringify(exercises));
  
        observer.next("ok");
        observer.complete();
      });
    })
  }

  private sampleData(): Exercise[] {
    let data: Exercise[] = [
      {
        category: "Science",
        name: "How Do GPS Coordinates Work?",
        description: "So you’ve seen those location-tagging numbers on maps and GPS devices before, but do you actually know what they mean? Brainstuff is here to fill you in.",
        videoId: "ALN7gXF1thY",
        reps: 0,
        sets: 0,
        hold: '-'
      },
      {
        category: "Science",
        name: "What is 'New Car Smell?'",
        description: "Ben explains just what it is you're smelling when you get inside a new car.",
        videoId: "iZNoDRN2vU4",
        reps: 0,
        sets: 0,
        hold: '-'
      }
    ];
    
    return data;
  }
}