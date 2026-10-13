import { useCallback, useMemo, useState } from "react";
import { UsersList } from "../../../components/users/Users.jsx";
import { useUsers } from './useUsers';
import { Test } from "./Test.jsx";
import { TodoList } from "./Todo.jsx";
import { Slider } from "./Slider.jsx";

export const Body = () => {
  const { loading, data, error } = useUsers();

  const [visibleUsers, setVisibleUsers] = useState(8);
  const [counter, setCounter] = useState(0);

  console.log("%cBody render", "color: orange", {
    visibleUsers,
    counter,
  });

  const filteredUsers = useMemo(() => {
    console.log("%cslice executed", "color: red");

    return data.slice(0, visibleUsers);
  }, [data, visibleUsers]);

  const handleLoadMore = useCallback(() => {
    setVisibleUsers((prev) => prev + 8);
  }, []);

  const handleCollapse = useCallback(() => {
    setVisibleUsers(8);
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main min-h-full w-full p-6">
      <button
        type="button"
        onClick={() => setCounter((prev) => prev + 1)}
        className="mb-4 rounded bg-gray-800 px-4 py-2 text-white"
      >
        Unrelated counter: {counter}
      </button>
      <Slider />
      {/* <TodoList /> */}
      {/* <Test /> */}
      {/* <UsersList
        filteredUsers={filteredUsers}
        onLoadMore={handleLoadMore}
        onCollapse={handleCollapse}
      /> */}
    </main>
  );
};