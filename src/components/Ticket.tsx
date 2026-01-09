import type React from "react";
import pobeda from "/image/pobeda.png";
import s7 from "/image/s7.png";
import redwings from "/image/red-wings.png";
import { companies } from "./helpers";
import type { TicketProps } from "./types";

const Ticket: React.FC<TicketProps> = ({
  price,
  fromto,
  time,
  company,
  duration,
  connectionAmount,
}) => {
  return (
    <div className="ticket">
      <div className="ticket__items">
        <div className="ticket__item">
          <div className="ticket__price">{`${price} Р`}</div>
          <div className="ticket__path">{fromto} </div>
          <div className="ticket__time">{`${time.startTime} - ${time.endTime}`}</div>
        </div>
        <div className="ticket__item">
          <div></div>
          <div className="ticket__text">В пути</div>
          <div className="ticket__duration">{`${Math.floor(duration / 60)} ч ${
            duration % 60
          } мин`}</div>
        </div>
        <div className="ticket__item">
          <div className="ticket__img">
            <img
              src={
                company === companies[0]
                  ? pobeda
                  : company === companies[2]
                  ? s7
                  : company === companies[1]
                  ? redwings
                  : ""
              }
              alt="название компании"
            />
          </div>
          <div className="ticket__text">Пересадки</div>
          <div className="ticket__transfers">
            {" "}
            {connectionAmount === 0
              ? "без пересадок"
              : connectionAmount === 1
              ? "1 пересадка"
              : `${connectionAmount} пресадки`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
