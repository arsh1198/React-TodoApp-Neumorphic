import id from "uuid/v4";

const dummy = [
  {
    id: id(),
    title: "Clean the Fish tank!",
    completed: false,
  },
  {
    id: id(),
    title: "Water the Plants!",
    completed: true,
  },
  {
    id: id(),
    title: "Read a book!",
    completed: false,
  },
];

export default dummy;
