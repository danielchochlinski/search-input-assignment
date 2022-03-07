import React, { useEffect } from "react";
import useControlledInput from "../hooks/useControlledInput";
import useUsers from "../hooks/useUsers";
import "./Input.css"

function Input() {
  const { inputValue, handleInputChange } = useControlledInput({
    defaultValue: "",
  });

  const { users, getUsers, isError } = useUsers(inputValue);

  useEffect(() => {
    getUsers();
  }, [inputValue]);

  return (
    <div className="searchContainer">
      <input
        placeholder="Search Username"
        list="users"
        value={inputValue}
        onChange={handleInputChange}
      />
      <datalist id="users">
        {/* no need to filter manually because datalist already have it in place */}
        {users.map((user) => (
          <option key={user.id} value={user.username} />
        ))}
      </datalist>
      {isError && <div>Something went wrong. Try again.</div>}
    </div>
  );
}

export default Input;
