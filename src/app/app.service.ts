import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }


  generateLongLivedToken(shortToken:string){
    const appID = "267239933931434";
    const appSecret = "d54ea27a3ebb3a01ef404081d09e4aac";
    return this.http.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${appID}&client_secret=${appSecret}&fb_exchange_token=${shortToken}`)
  }
}
// EAADzDaVU76oBAAQo8cwpTEgOnZCK1KuEYhgnn1QmAlQpGHYZAYZCYU0NbyFfQTO5Tfg4agfe6cpjgU30aJNaw1xCrpiJ1PWxDl1fNSKzPx5A1iSIzg33WZC7ceoJOBEEiGFpW7V05eeR6FohlB4ZAwZCUMwmQZAqGjYptdQpaYvlbhOWZAfwnbmK4OQF6U4r9QOHiN0WgdZBVYAZDZD
// EAADzDaVU76oBADCgcwwxpZCL4uhZBrJfIyaelBClMbj2fVcOcZCjJMvCP2vlFuo18ambRT7W8RBZC7uEwNQzUvzfI5CapXXZAFtZAMIKLWOzNjeVwZBircQKGL0ZCcZBfeH0ZALXd71TPKLGUinTnH8ah1bPX7oKwtJM4ZD
// graph.facebook.com/debug_token?input_token=EAADzDaVU76oBAAQo8cwpTEgOnZCK1KuEYhgnn1QmAlQpGHYZAYZCYU0NbyFfQTO5Tfg4agfe6cpjgU30aJNaw1xCrpiJ1PWxDl1fNSKzPx5A1iSIzg33WZC7ceoJOBEEiGFpW7V05eeR6FohlB4ZAwZCUMwmQZAqGjYptdQpaYvlbhOWZAfwnbmK4OQF6U4r9QOHiN0WgdZBVYAZDZD&access_token=EAADzDaVU76oBADCgcwwxpZCL4uhZBrJfIyaelBClMbj2fVcOcZCjJMvCP2vlFuo18ambRT7W8RBZC7uEwNQzUvzfI5CapXXZAFtZAMIKLWOzNjeVwZBircQKGL0ZCcZBfeH0ZALXd71TPKLGUinTnH8ah1bPX7oKwtJM4ZD
