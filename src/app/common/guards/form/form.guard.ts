import {Injectable, OnDestroy} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {Observable, Observer} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../components/shared/confirmation-dialog/confirmation-dialog.component';
import { FormGroup } from '@angular/forms';
import {finalize, map, takeWhile} from "rxjs/operators";

interface ComponentWithFormInterface {
  submitted: boolean;
  form: FormGroup;
}

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<ComponentWithFormInterface> {

  constructor(public dialog: MatDialog) { }

  canDeactivate(component: ComponentWithFormInterface): Observable<boolean> | boolean {
    if (component.submitted || component.form.pristine) {
      return true;
    }

    return this.dialog.open(ConfirmationDialogComponent)
      .afterClosed()
      .pipe(map(result => !!result));
  }
}
