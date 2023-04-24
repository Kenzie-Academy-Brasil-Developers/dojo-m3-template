import { useState } from "react";
import { Input } from "./Input";

export const Form = () => {
  const [todo, setTodo] = useState(null);

  return (
    <form>
      <Input label="Tarefa" id="todo" value={todo} setValue={setTodo} />
      <button type="submit">Adicionar</button>
    </form>
  );
};
