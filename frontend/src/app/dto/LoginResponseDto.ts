export class LoginResponseDto {
  success: boolean = false;
  token!: string;
  admin!: boolean;
  name!: string;
}
