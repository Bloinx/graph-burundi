import { User } from "lucide-react";

type User = {
  id: string;
  memberSince: number;
  sharesBalance: number;
  socialBalance: number;
  sharesDebt: number;
  socialDebt: number;
  lastLoanDate: number;
  isActive: number;
};
export type Users = {
  users: [User];
};
