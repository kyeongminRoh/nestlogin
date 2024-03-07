import { Module } from "@nestjs/common";
import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./services/auth.service";
import { AuthRepository } from "./repository/auth.repository";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([]),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        AuthRepository,
    ],
    exports: [
        AuthService,
        AuthRepository,
    ],
})

export class AuthModule {}