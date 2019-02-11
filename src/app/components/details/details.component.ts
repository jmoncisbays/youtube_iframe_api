import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../../models/exercise.model';
import { ExercisesRepository } from '../../repositories/exercises.repository';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { YoutubeDirective } from '../../directives/youtube.directive';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public exercise: Exercise;
  public videoLoaded: boolean = false;

  @ViewChild(YoutubeDirective) player: YoutubeDirective;

  constructor(private exercisesRepository: ExercisesRepository, private activatedRoute: ActivatedRoute,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    let index: number = Number(this.activatedRoute.snapshot.paramMap.get('index'));
    this.exercisesRepository.getByIndex(index).subscribe(data => this.exercise = data);
  }

  videoEnded(e: any) {
    this.openDialog();
  }

  loadVideo(videoId: string) {
    this.videoLoaded = true;
    this.player.loadVideo(videoId);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExerciseCompleteQuestion, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(["home"]);
    });
  }
}


@Component({
  selector: 'dialog-exercise-complete-question',
  templateUrl: 'dialog-exercise-complete-question.html',
})
export class DialogExerciseCompleteQuestion {

  constructor(public dialogRef: MatDialogRef<DialogExerciseCompleteQuestion>) { }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

}