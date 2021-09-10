import { v4 as uuid } from "uuid"

export const bubbles = [
  {
    id: uuid(),
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: uuid(),
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: uuid(),
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: uuid(),
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: uuid(),
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  },
]
