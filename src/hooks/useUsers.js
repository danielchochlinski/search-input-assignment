import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/users";

const useUsers = (inputValue) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const isError = useSelector((state) => state.user.fetchFailure);

  const getUsers = () => {
    if (inputValue.length > 0) {
      dispatch(fetchUsers(inputValue));
    }
  };

  return {
    users,
    getUsers,
    isError,
  };
};

export default useUsers;
