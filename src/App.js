import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './component/NavBar';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import PrivateRoute from './route/PrivateRoute';
// 1. 전체상품페이지, 로그인, 상품상세페이지 3개의 페이지로 구성
// 2. 전체 상품페이지에서는 전체 상품이 출력된다.
// 3. 로그인 버튼을 누르면 로그인이 페이지가 나온다
// 4. 상품디테일을 눌르면 로그인여부를 체크하여 로그인이 안되어있을시에는 로그인페이지가 나온다.
// 5. 로그인이 되어있을시 삼품 디테일 페이지를 볼수 있다.
// 6. 로그아웃 버튼을 클릭하여 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼수없다. 다시 로그인하여 페이지가 보인다.
// 8. 삼푸을 검색 할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
  }, [authenticate])
  return (
    <div >
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} ></NavBar>
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
        <Route path='/login' element={<Login authenticate={authenticate} setAuthenticate={setAuthenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
