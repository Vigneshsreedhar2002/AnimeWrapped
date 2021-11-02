import { Component, OnInit } from "@angular/core";
import { UserDataService } from "app/services/user-data.service";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {}

  username = this.userDataService.getUserName();
}
