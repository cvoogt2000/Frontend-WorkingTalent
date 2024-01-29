import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LoginResponseDto } from '../../dto/LoginResponseDto';
import { ResponseDto } from '../../dto/ResponseDto';
import { SaveUserDto } from '../../dto/SaveUserDto';
import { User } from '../../user-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userId: number = 0;

  constructor(private http: HttpClient) { }

  login(email: string | null, password: string | null): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(environment.BACKEND_URL + '/user/login', {
      email: email,
      password: password
    })
  }

  update(id: number, dto: SaveUserDto): Observable<ResponseDto> {
    return this.http.put<ResponseDto>(environment.BACKEND_URL + '/user/' + id, dto);
  }

  public setUserContstants() {
    const token = this.decodeToken();
    console.log(token);
    if(token === '') {
        User.admin = '';
        User.id = '';
        return;
    }

    User.admin = localStorage.getItem("WT_ADMIN");
    User.id = localStorage.getItem("WT_USERID");
}

  decodeToken() : any {
    const token = localStorage.getItem("WT_TOKEN");

    if(!token) {
      return '';
    }

    return JSON.parse(window.atob(token));
  }

}
