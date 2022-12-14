import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private userModel: Model<UserInterface>) { }

  async create(createUserInput: CreateUserInput): Promise<UserInterface> {
    const newUser = new this.userModel(createUserInput);
    return await newUser.save();
  }

  async findAll(): Promise<UserInterface[]> {
    const allUsers = await this.userModel.find();
    return allUsers;
  }

  async findOne(id: string): Promise<UserInterface> {
    const findUser = await this.userModel.findById({ _id: id });
    return findUser;
  }

  async update(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<UserInterface> {
    const updateUserDetails = await this.userModel.findByIdAndUpdate(
      { _id: id },
      updateUserInput,
    );
    return updateUserDetails;
  }

  async remove(id: string): Promise<string> {
    await this.userModel.deleteOne({ _id: id });
    return 'User Deleted Successfully....!';
  }
}
