import { attendance } from "./attendance";
export interface dashboard {
    id?: string;
    name: string;
    email: string;
    phone: Number;
    attendance:Array<attendance>;
  }
  