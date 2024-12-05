import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import MenuPage from "./pages/MenuPages";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("test0");
  const handleClick = () => {
    setCount(count); // 값을 변경하지 않는 상태 업데이트
    console.log("test1");
  };

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Click me</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="menupage" element={<MenuPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
