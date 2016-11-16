import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdInput } from '@angular/material';
import { LocalStorageService } from 'ng2-webstorage';
import { Animations } from '../../shared/animations';
import { AnimationsService } from '../../shared/animations/animations.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent extends Animations implements OnInit {
  @ViewChild('nickControl') nickControl: MdInput;

  /**
   * Constructor of the class.
   *
   * @param {AnimationsService}   animationsService
   * @param {LocalStorageService} localStorage
   * @param {Router}              router
   */
  public constructor(
    protected animationsService: AnimationsService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {
    super(animationsService);
  }

  /**
   * ngOnInit lifecycle hook.
   */
  public ngOnInit() {
    this.nickControl.focus();
  }

  /**
   * Method to store nick to local storage and redirect user.
   *
   * @param {string} nick
   */
  public enterNick(nick: string) {
    this.localStorage.store('nick', nick);

    this.router.navigate(['/chat']);
  }
}
