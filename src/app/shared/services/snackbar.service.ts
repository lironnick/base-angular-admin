import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar, 
         MatSnackBarConfig, 
         MatSnackBarHorizontalPosition,
         MatSnackBarVerticalPosition,
       } from '@angular/material/snack-bar';


interface IsnackBar {
  type?: String, // success | danger | warning | secondary
  text: String,
  button?: String,
  duration?: number,
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end'; //'start' | 'center' | 'end' | 'left' | 'right'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'; // 'top' | 'bottom'
  addExtraClass: boolean = true;

  private _snackBar = new BehaviorSubject<IsnackBar>({
    type: '',
    text: 'Ops, ocorreu um erro tente novamente',
    button: 'Fechar',
    duration: 5,
  });

  constructor(private snackBar: MatSnackBar) { }

  get success(): IsnackBar {
    return this._snackBar.value;
  }

  set success(success: IsnackBar) {
    this._snackBar.next(success);

    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition; 
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this._snackBar.value.duration ? this._snackBar.value.duration : 5 * 1000;  
    config.panelClass = this._snackBar.value.type ? [`${this._snackBar.value.type}`] : undefined;

    this.snackBar.open(
      `${this._snackBar.value.text}`, 
      `${this._snackBar.value.button ? this._snackBar.value.button : 'Fechar'}`,
      config
      );
  }

  

  
}
