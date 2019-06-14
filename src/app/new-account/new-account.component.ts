import { Component } from '@angular/core';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService: AccountService) {
    this.accountService.statusChanged.subscribe(this.alertStatus);
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }

  alertStatus(status: string) {
    alert('New Status: ' + status);
  }

}
