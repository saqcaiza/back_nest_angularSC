import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigService } from 'src/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            inject:[ConfigService],
            useFactory:(config:ConfigService)=>({
                type:'postgres',
                host: config.get('HOST'),
                port: +config.get('PORT'),
                username: config.get('USERNAME') ,
                password:config.get('PASSWORD'),
                database: config.get('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts, .js}',
                ],
            })
        })
    ],
    providers: [...databaseProviders,ConfigService],
    exports: [...databaseProviders],
})
export class DatabaseModule {

}