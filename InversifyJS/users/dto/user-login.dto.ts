import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Email name is wrong' })
	email: string;
	@IsString();
	password: string;
}
