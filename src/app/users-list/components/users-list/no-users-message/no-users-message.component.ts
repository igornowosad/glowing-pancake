import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-users-message',
  templateUrl: './no-users-message.component.html',
  styleUrls: ['./no-users-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoUsersMessageComponent {
  constructor(private router: Router) {}

  goToAddUser(): void {
    this.router.navigate(['add']);
  }
}
