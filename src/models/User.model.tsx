
export interface User {
  name: string;
  email: string;
  height: number;
  weight: number;
  birthday: string;
  medicines: Medicine[];
}

export interface Medicine {
  key: number;
  name: string;
  specs: string;
  hours: string;
  description: string;
  tookMed?: boolean;
};

export interface DailyMedicine {
  name: string;
  height: number;
  weight: number;
  email: string;
  date: string;
  medicines: Medicine[],
}