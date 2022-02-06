import { Component, OnInit } from "@angular/core";
import { UserDataService } from "app/services/user-data.service";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  userName: string;

  constructor() {}

  // constructor(private userDataService: UserDataService) {
  //   this.userDataService.getUserData().subscribe(
  //     (response) => {
  //       //next() callback
  //       console.log("response received");
  //       this.userName = response.name;
  //     },
  //     (error) => {
  //       //error() callback
  //       console.error("Request failed with error");
  //     },
  //     () => {
  //       //complete() callback
  //       console.error("Request completed");
  //     }
  //   );
  // }

  ngOnInit(): void {
    
  }
}
