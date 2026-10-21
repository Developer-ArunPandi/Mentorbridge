import { atom } from 'jotai';

export interface IUserFormType {
  name: string;
  email: string;
  phoneNumber: number | "";
  city: string;
  gender: string;
  termsAndConditions: boolean; 
}

export const userFormAtom = atom<IUserFormType>({
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
  gender: "",
  termsAndConditions: false, 
});
