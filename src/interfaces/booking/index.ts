import { TicketInterface } from 'interfaces/ticket';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  company_id: string;
  user_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    ticket?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  user_id?: string;
  status?: string;
}
