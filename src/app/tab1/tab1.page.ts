import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from '../service/http.service';
import { FriendInfo } from '../model/FriendInfo';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "All Friend";
  isdetail = false;
  public data: FriendInfo[] = [];
  public selectFriend: any;
  public src: any;

  constructor(
    public sanitizer: DomSanitizer,
    httpService: HttpService
  ) {

    httpService.get().subscribe((response: any) => {
      this.data = response;
    });
  }

  detail(id: string) {
    this.isdetail = true;
    this.title = "< Your Friend";
    this.selectFriend = this.data.find(s => s._id == id);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps?q=" +
      this.selectFriend.location.latitude
      + ","
      + this.selectFriend.location.latitude
      +"&output=embed");
  }

  back() {

    this.isdetail = false;
    this.title = "All Friend";
  }


}
