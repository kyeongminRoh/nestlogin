import { Body, Controller, Post } from '@nestjs/common';
import { LoginRequestDto } from 'auth/dto/login.requestDto';
import { LoginResponseDto } from 'auth/dto/login.responsedto';
import { LoginService } from 'auth/services/login.service';

@Controller('signup')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async login(
    @Body() LoginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto> {

    return this.loginService.login(
      LoginRequestDto.email,
      LoginRequestDto.password,
    );
  }
}
