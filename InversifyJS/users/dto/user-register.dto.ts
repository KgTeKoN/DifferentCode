import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'The email is incorrect' })
	email: string;

	@IsString({ message: 'Unspecified password' })
	password: string;

	@IsString({ message: 'Unspecified name' })
	name: string;
}
