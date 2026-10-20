import { atom } from 'jotai';

export interface IUserFormType {
  name: string;
  email: string;
  age: number | "";
}

export const userFormAtom = atom<IUserFormType>({
  name: '',
  email: '',
  age: "",
});