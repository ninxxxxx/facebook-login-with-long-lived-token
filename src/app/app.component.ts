import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";

declare var window: any;
declare var FB: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  ngOnInit() {
    // if (window.FB) {
    //   window.FB.XFBML.parse();
    // }
    const appID = "267239933931434";
    const secret = "d54ea27a3ebb3a01ef404081d09e4aac";


    if (typeof FB !== undefined)
      FB.Event.subscribe("auth.statusChange", (response: any) => {
        console.log(response);
        const { authResponse } = response;
        const { userID, accessToken } = authResponse;
        if (response.status === "connected") {
          // use the response variable to get any information about the user and to see the tokens about the users session

          this.generateLongLive(accessToken);

          // FB.api(userID, function(user) {
          //   if (response && !response.error) {
          //     /* handle the result */
          //     console.log(user);
          //   }
          // });
        }
      });
  }

  constructor(private appService:AppService) {
    // FB.check


  }

  login() {
    FB.login();
  }


  generateLongLive(shortToken:string){
    this.appService.generateLongLivedToken(shortToken).subscribe(res=>{
      console.log(res);
    })
  }
}
