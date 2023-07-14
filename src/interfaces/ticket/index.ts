import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  booking_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  booking?: BookingInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  booking_id?: string;
  status?: string;
}
