import { Module } from '@nestjs/common';
import { PostModule } from './posts/posts.module';

@Module({
  imports: [PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
