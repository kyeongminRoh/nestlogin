import { Injectable } from '@nestjs/common';
import { LoginResponseDto } from 'auth/dto/login.responsedto';
import { UserEntity } from 'auth/entity/auth.entity';
import * as argon2 from 'argon2';
import { AuthRepository } from 'auth/repository/auth.repository';
import { AccessLoginRepository } from 'auth/repository/login.repository';

@Injectable()
export class LoginService {
  constructor(
    private readonly accessLoginRepository: AccessLoginRepository,
    private readonly authRepository: AuthRepository,
  ) {}

  async login(email: string, plainPassword: string): Promise<LoginResponseDto> {
    const loginUser = await this.validateUser(email, plainPassword);
    await this.accessLoginRepository.createAccessLog(loginUser);
    return {
      loginUser: {
        id: loginUser.id,
        name: loginUser.name,
        email: loginUser.email,
      },
    };
  }

  private async validateUser(
    email: string,
    plainPassword: string,
  ): Promise<UserEntity> {
    const user = await this.authRepository.findOneByEmail(email);
    if (user && (await argon2.verify(user.password, plainPassword))) {
      return user;
    }
  }
}
