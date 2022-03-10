import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router,
    private socialAuthService: SocialAuthService,
    private http: HttpClient) {
}

loginWithGoogle(): void {
this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
.then((resp) => {
  console.log(resp);
  // this.http.post<{status:{},data:any}>("http://localhost:3071/usersocial/token",{token:resp.response.id_token})
  //       .subscribe((resp)=>{
  //       },error=>{
  //         console.log("login failed",error);
  //       });
  this.router.navigate(['/'])
});


}

signInWithFB(): void {
  this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((resp)=>{
    console.log("facebook->",resp)
  });
}

signInwithTrueCaller(): void {
  window.location.href = `truecallersdk://truesdk/web_verify?requestNonce=8585937950
                          &partnerKey=edIsh8e9964cad1314f80aff7a718787fe7e0
                          &partnerName=none
                          &lang=en
                          &title=TITLE_STRING_OPTION`;

    setTimeout(()=>{

      if( document.hasFocus() ){
        alert('not present');
      }
      else{
        alert('check message');
        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify & you'll receive the user's access token to fetch the profile on your
        // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
      }
    }, 600);
}
}
