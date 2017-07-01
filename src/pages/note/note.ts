import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService } from "../../services/noteService";
import { MessageService } from "../../services/sharedServices/messageService";

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage implements OnInit {

  notes: any;
  note: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NoteService, public messageService: MessageService) {
  }

  ngOnInit() {
    this.get();
  }

  get() {
    let promise = this.noteService.get();
    promise.then((data) => {
      this.notes = data;
    }).catch((error) => {
      this.messageService.toast(error, "bottom");
    });
  }

  save(value: string) {
    this.noteService.add(value).then((data) => {
      this.get();
      this.note = "";
      this.messageService.toast(data);
    }).catch((error) => {
      this.messageService.toast(error, "bottom");
    });
  }

  remove(value: any) {
    this.noteService.remove(value).then((data) => {
      this.get();
      this.messageService.toast(data);
    }).catch((error) => {
      this.messageService.toast(error, "bottom");
    });
  }
}
