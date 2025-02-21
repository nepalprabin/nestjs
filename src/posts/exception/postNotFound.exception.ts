import { HttpException, NotFoundException } from '@nestjs/common';

class PostNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Post with id ${postId} not found`);
  }
}
