
export interface User {
  name: string;
  email: string,
  height: number,
  weight: number,
  birthday: string,
  medicines: Medicine[],
}

export interface Medicine {
  key: number;
  name: string;
  specs: string;
  hours: string;
  description: string;
};