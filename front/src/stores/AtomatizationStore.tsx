import React from "react";
import { makeAutoObservable } from "mobx";
import cuid from "cuid";
import { ReactComponent as Call } from "../images/icons/call.svg";

class AtomatizationStore {
  lines = [
    {
      id: "1",
      type: "event",
      data: {
        label: (
          <>
            <Call />
            <span>Звонок клиента</span>
          </>
        ),
      },
      position: { x: 250, y: 25 },
    },
    {
      id: "2",
      type: "fork",
      data: { label: <div>Создать запись в журнале</div> },
      position: { x: 250, y: 125 },
    },
    {
      id: "3",
      data: { label: "Закрыть заявку" },
      position: { x: 250, y: 250 },
    },
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
      label: "edge label",
    },
    { id: "e2-3", source: "2", target: "3", animated: true },
  ];

  nodes = [
    { type: "event", title: "Звонок клиета" },
    { type: "event", title: "Жалоба" },
    { type: "event", title: "Заявка" },
    { type: "fork", title: "Создать запись в журнал" },
    { type: "fork", title: "Создать заявку на покупку" },
    { type: "fork", title: "Перевести на оператора" },
    { type: "fork", title: "Отправить уведомление в Telegram" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  updateLines(newLines) {
    this.lines = newLines;
  }

  addEvent({ type, title }) {
    this.lines.push({
      id: cuid(),
      type: type,
      data: {
        label: title,
      },
      position: { x: 0, y: 0 },
    });
  }
}

export default new AtomatizationStore();
