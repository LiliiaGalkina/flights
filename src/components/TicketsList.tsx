import Ticket from "./Ticket";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  fetchFlights,
  sortTicketsCheap,
  sortTicketsFast,
  sortTicketsOptimal,
} from "../store/flightsSlice";
import { useCallback, useEffect, useState } from "react";

const TicketsList = () => {
  const [isCheapActive, setIsCheapActive] = useState(false);
  const [isFastActive, setIsFastActive] = useState(false);
  const [isOptimalActive, setIsOptimalActive] = useState(false);
  const [displayedTickets, setDisplayedTickets] = useState<number>(3);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const handleLoadMore = useCallback(() => {
    if (displayedTickets < 15) {
      setDisplayedTickets(displayedTickets + 3);
    }
  }, [displayedTickets]);

  const flights = useAppSelector((state) => state.flights.filtered);

  const onSortCheap = () => {
    if (!isCheapActive) {
      setIsCheapActive(true);
      setIsFastActive(false);
      setIsOptimalActive(false);
      dispatch(sortTicketsCheap());
    }
  };

  const onSortFast = () => {
    if (!isFastActive) {
      setIsFastActive(true);
      setIsCheapActive(false);
      setIsOptimalActive(false);
      dispatch(sortTicketsFast());
    }
  };

  const onSortOptimal = () => {
    if (!isOptimalActive) {
      setIsOptimalActive(true);
      setIsCheapActive(false);
      setIsFastActive(false);
      dispatch(sortTicketsOptimal());
    }
  };

  return (
    <>
      <div className="tickets__sort-buttons">
        <button
          className="tickets__sort-button"
          onClick={onSortCheap}
          style={{
            backgroundColor: isCheapActive ? "#4E148C" : "#E8EBF2",
            color: isCheapActive ? "#F7F9F7" : "#4E148C",
          }}
          title="Сортировка по цене билета"
        >
          Самый дешевый
        </button>
        <button
          className="tickets__sort-button"
          onClick={onSortFast}
          style={{
            backgroundColor: isFastActive ? "#4E148C" : "#E8EBF2",
            color: isFastActive ? "#F7F9F7" : "#4E148C",
          }}
          title="Сортировка по длительности полета"
        >
          Самый быстрый
        </button>
        <button
          className="tickets__sort-button"
          onClick={onSortOptimal}
          style={{
            backgroundColor: isOptimalActive ? "#4E148C" : "#E8EBF2",
            color: isOptimalActive ? "#F7F9F7" : "#4E148C",
          }}
          title="Сортировка по количеству пересадок"
        >
          Самый оптимальный
        </button>
      </div>
      <div className="tickets__list">
        {flights.slice(0, displayedTickets).map((flight) => (
          <Ticket key={flight.id} {...flight} />
        ))}
      </div>
      <button
        className="tickets__addtickets"
        style={{
          display: displayedTickets < flights.length ? "block" : "none",
        }}
        onClick={handleLoadMore}
      >
        Загрузить еще билеты
      </button>
    </>
  );
};

export default TicketsList;
