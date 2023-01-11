import Home from "Pages/Home/Home"
import { Route, Routes } from "react-router-dom"

const Router = () => {
  return(
<Routes>
<Route path={'/'} element={<Home />} />
<Route path={'/123'} element={<Home />} />
  qwe
</Routes>)
}

export default Router