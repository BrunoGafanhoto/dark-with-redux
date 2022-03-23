import { useEffect } from "react";
import "./assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "./store/modules/modeDark/actions";
const mode_settings = [
  {
    name: "Light",
    class: "theme-mode-light",
  },
  {
    name: "Dark",
    class: "theme-mode-dark",
  },
];

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const modeHistory = localStorage.getItem("mode");
    dispatch(setMode(modeHistory));
  }, [dispatch]);
  return (
    <div className={`app ${theme.mode}`}>
      {mode_settings.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            localStorage.setItem("mode", item.class);
            dispatch(setMode(item.class));
          }}
        >
          Mode {item.name}
        </button>
      ))}

      <h1>Mode Dark With Redux</h1>
    </div>
  );
}

export default App;
