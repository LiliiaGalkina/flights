import { useState } from "react";
import { useAppDispatch } from "../store/hook";
import { filterTickets, setSelectedStops } from "../store/flightsSlice";
import mark from "/image/mark.svg";

const TransferCountFilter = () => {
  const [filterTransit0, setFilterTransit0] = useState(false);
  const [filterTransit1, setFilterTransit1] = useState(false);
  const [filterTransit2, setFilterTransit2] = useState(false);
  const [filterTransit3, setFilterTransit3] = useState(false);

  const dispatch = useAppDispatch();

  const handleFilterTransitClick0 = () => {
    setFilterTransit0(!filterTransit0);
    dispatch(setSelectedStops(0));
    dispatch(filterTickets());
  };

  const handleFilterTransitClick1 = () => {
    setFilterTransit1(!filterTransit1);
    dispatch(setSelectedStops(1));
    dispatch(filterTickets());
  };

  const handleFilterTransitClick2 = () => {
    setFilterTransit2(!filterTransit2);
    dispatch(setSelectedStops(2));
    dispatch(filterTickets());
  };

  const handleFilterTransitClick3 = () => {
    setFilterTransit3(!filterTransit3);
    dispatch(setSelectedStops(3));
    dispatch(filterTickets());
  };

  return (
    <div className="filter">
      <div className="filter__title">Количество пересадок</div>
      <ul className="filter__list square">
        <li className="square__item">
          <input
            type="checkbox"
            id="transit0"
            className="square__rowcheckbox"
            checked={filterTransit0}
            onChange={handleFilterTransitClick0}
            style={{
              backgroundImage: filterTransit0 ? `url(${mark})` : "none",
              backgroundColor: filterTransit0 ? "#e8ebf2" : "inherit",
            }}
          />
          <label htmlFor="transit0" className="square__rowtext">
            Без пересадок
          </label>
        </li>
        <li className="square__item">
          <input
            type="checkbox"
            id="transit1"
            className="square__rowcheckbox"
            checked={filterTransit1}
            onChange={handleFilterTransitClick1}
            style={{
              backgroundImage: filterTransit1 ? `url(${mark})` : "none",
              backgroundColor: filterTransit1 ? "#e8ebf2" : "inherit",
            }}
          />
          <label htmlFor="transit1" className="square__rowtext">
            1 пересадка
          </label>
        </li>
        <li className="square__item">
          <input
            type="checkbox"
            id="transit2"
            className="square__rowcheckbox"
            checked={filterTransit2}
            onChange={handleFilterTransitClick2}
            style={{
              backgroundImage: filterTransit2 ? `url(${mark})` : "none",
              backgroundColor: filterTransit2 ? "#e8ebf2" : "inherit",
            }}
          />
          <label htmlFor="transit2" className="square__rowtext">
            2 пересадки
          </label>
        </li>
        <li className="square__item">
          <input
            type="checkbox"
            id="transit3"
            className="square__rowcheckbox"
            checked={filterTransit3}
            onChange={handleFilterTransitClick3}
            style={{
              backgroundImage: filterTransit3 ? `url(${mark})` : "none",
              backgroundColor: filterTransit3 ? "#e8ebf2" : "inherit",
            }}
          />
          <label htmlFor="transit3" className="square__rowtext">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TransferCountFilter;
