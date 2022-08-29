import { useState } from "react";
import Modal from "./components/Modal";
import "./index.scss";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>

      {/*// 1 способ условный рендер компонент
    {open && <Modal open={open} setOpen={setOpen} />}
    */}
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
