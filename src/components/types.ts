type Time = {
  startTime: string;
  endTime: string;
};

export interface TicketProps {
  price: number;
  fromto: string;
  time: Time;
  company: string;
  duration: number;
  connectionAmount: number;
}

export interface IFlight {
  id: number;
  price: number;
  fromto: string;
  time: Time;
  company: string;
  duration: number;
  connectionAmount: number;
}

export interface IFlightState {
  flights: IFlight[];
  filtered: IFlight[];
  filterByCompany: string[];
  filterByTransfersCount: number[];
  isLoading: boolean;
  isError: boolean;
}
