import { Injectable,Inject } from '@angular/core';
import { BROWSER_STORAGE } from '../storage/storage';
import HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';
import { AuthResponse } from './authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiBaseUrl:string = "http://localhost:3000";

  constructor(@Inject(BROWSER_STORAGE) private storage:Storage,
              private http:HttpClient
  ) { }

  public getToken():string{
      return this.storage.getItem('admin-token')

  }

  public saveToken(token:string){
      this.storage.setItem('admin-token',token); 
  }

  public login(admin:Admin):Promise<any>{
      return this.makeAuthApiCall('login',admin).then(authResponse:AuthResponse => this.saveToken(authResponse));
  }

  public logout(): void {
      this.storage.removeItem('admin-token');
  }

  public isLoggedIn:boolean {
      const token:string = this.getToken();  // get token from storage
      if(token){
          const payload = JSON.parse(atob(token).split(".")[1]) // decode payload,parse to json
          return payload.exp > (Date.now()/1000); // check toke expiry
      }else{
          return false;
      }
  }

  public register(admin:Admin):Promise<any>{
      return this.makeAuthApiCall('register',admin).then(authResponse:AuthResponse => this.saveToken(authResponse));
  }

  public makeAuthApiCall(urlpath:String,admin:Admin):Promise<AuthResponse>{
      url:string = `${this.apiBaseUrl}/${urlpath}`;
      return this.http.post(url,admin)
                      .toPromise()
                      .then(response => response as AuthResponse)
                      .catch(error => this.handleError(error))
  }

  public getCurrentUser():User{
      if(this.isLoggedIn){
          const token = this.getToken();
          const { email, name } = JSON.parse(atob(token.split('.')[1]));
          return { email, name } as User;
      };
  };

  private handleError(error: any): Promise<any> {
      console.error('Something has gone wrong', error);
      return Promise.reject(error.message || error);
  }


}
