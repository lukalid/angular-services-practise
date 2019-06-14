import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AccountService {

  private accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusChanged = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(accountName: string, accountStatus: string) {
    this.accounts.push({name: accountName, status: accountStatus});
    this.loggingService.logStatusChange(accountStatus);
  }

  updateStatus(accountId: number, accountStatus: string) {
    this.accounts[accountId].status = accountStatus;
    this.loggingService.logStatusChange(accountStatus);
  }

  getAccounts() {
    return this.accounts;
  }

}
