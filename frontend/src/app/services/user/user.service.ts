import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LoginResponseDto } from '../../dto/LoginResponseDto';
import { ResponseDto } from '../../dto/ResponseDto';
import { SaveUserDto } from '../../dto/SaveUserDto';

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

}
