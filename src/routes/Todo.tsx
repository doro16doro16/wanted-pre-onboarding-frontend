import React from "react";

const Todo = () => {
  // id, 할일, 완료
  // const { id, work, complete } = todo;
  const tmp = {
    id: 1,
    work: "집가기",
    complete: "true",
  };

  return <>{tmp.work}</>;
};

export default Todo;
