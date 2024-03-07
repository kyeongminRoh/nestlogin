import { Body, Controller, Post } from '@nestjs/common';
import { CreateSignupDto } from '../dto/signup.requestDto';
import { SignupResDto } from '../dto/signup.resposneDto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signup(
    @Body() createSignupDto: CreateSignupDto,
  ): Promise<SignupResDto> {
    const authSignup = await this.authService.createSignup(createSignupDto);
    return {
      id: authSignup.id,
      name: authSignup.name,
      email: authSignup.email,
    };
  }
}
