export class CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    usertype: number;
}

export class LoginUserDto {
    email: string;
    password: string;
    usertype: number;
}