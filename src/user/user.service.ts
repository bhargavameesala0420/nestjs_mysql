import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UtilityController } from 'src/utility/utility.controller';
import User from 'src/entities/user.entity';
import { messages } from 'src/utility/constants'

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const response = await UtilityController.create(User,createUserDto);
    return response;
  }

  async findOne(loginUserDto: LoginUserDto) {
    const response = await UtilityController.findOne(User,loginUserDto);
    if(response.status >=400){
      response.message = messages['invaliduser']
    }
    return response;
  }
}
