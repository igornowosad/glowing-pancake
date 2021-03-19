import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { User } from '@app/shared';
import * as fromUserActions from '@app/user-details/state/user/user.actions';
import { selectUser } from '@app/user-details/state/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserComponent implements OnInit, OnDestroy {
  editMode: boolean;
  form = this.fb.group({
    name: ['', Validators.required],
    surname: [''],
    birthDate: [''],
    phone: ['', [Validators.minLength(9), Validators.maxLength(9)]],
    city: [''],
    street: [''],
    number: ['']
  });
  private userSubscription$: Subscription;
  private editedUserId: number;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const editedUserId = +this.router.snapshot.paramMap.get('id') as User['id'];
    if (editedUserId) {
      this.editMode = true;
      this.editedUserId = editedUserId;
      this.store.dispatch(fromUserActions.getUser({ id: editedUserId }));

      this.userSubscription$ = this.store.select(selectUser)
        .subscribe((user) => this.form.patchValue(user));
    }
  }

  saveUser(): void {
    if (this.form.invalid) {
      return;
    }

    if (this.editMode) {
      this.store.dispatch(fromUserActions.editUser({ id: this.editedUserId, data: this.form.value }));
      return;
    }

    this.store.dispatch(fromUserActions.addUser({ user: this.form.value }));
    this.clearForm();
  }

  clearForm(): void {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.userSubscription$?.unsubscribe();
  }

  isFormValid(): boolean {
    return this.form.valid;
  }
}
