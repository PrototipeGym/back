import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';

export const ActiveUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserActiveInterface => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

