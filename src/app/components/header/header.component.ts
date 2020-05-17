import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() opened;
  @Output() openedChange = new EventEmitter<boolean>();

  constructor(
    public dialog: MatDialog, private userService: UserService){
  }

  @Output() searchChange = new EventEmitter();

  onSearch(event): void {
    this.searchChange.emit(event.target.value);
  }

  ngOnInit(): void {
  }

  createTask() {
    this.dialog.open(CreateComponent);
  }

  toggleSideBar() {
    this.opened = !this.opened;
    this.openedChange.emit(this.opened);
  }

  logout() {
    this.userService.logoutUser();
  }

}
