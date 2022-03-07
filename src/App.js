import { Provider } from "react-redux";
import store from "./store";
import Input from "./components/Input";

export default function App() {
  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
}
