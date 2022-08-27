import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PbEnv } from './pb-env.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      isGlobal: true,
    }),
  ],
  providers: [PbEnv],
  exports: [PbEnv],
})
export class PbEnvModule {}
