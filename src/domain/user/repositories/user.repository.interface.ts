import { ICreateUserDto } from '../dto/create-user.dto.interface';
import { IUser } from '../entities/user.entity.interface';

export interface IUserRepository {
  insertOne(data: Omit<ICreateUserDto, 'confirmPassword'>): Promise<IUser>;
}
