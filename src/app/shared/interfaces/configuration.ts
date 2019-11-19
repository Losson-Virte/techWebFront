import {ComponentI} from './component';
import {User} from './user';

export interface Configuration {
  _id?: string;
  name: string;
  composants: ComponentI[];
  user: User;
}
