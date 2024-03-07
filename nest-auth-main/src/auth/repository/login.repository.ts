import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessLog } from 'auth/entity/accesslog.entity';
import { UserEntity } from 'auth/entity/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccessLoginRepository {
  constructor(
    @InjectRepository(AccessLog)
    private readonly accessLogRepository: Repository<AccessLog>,
  ) {}

  async createAccessLog(loginUser: UserEntity) {
    const accessLog = new AccessLog();
    accessLog.loginUser = loginUser;
    // accessLog.ua = ua;
    // accessLog.endpoint = endpoint;
    // accessLog.ip = ip;
    await this.accessLogRepository.save(accessLog);
  }
}
