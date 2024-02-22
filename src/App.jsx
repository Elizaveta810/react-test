import { Route, Routes } from "react-router-dom"
import { appRoytes } from "./lib/appRoutes"
import SigninPage from "./pages/SigninPage/SigninPage"
import SignupPage from "./pages/SignupPage/SignupPage"
import NotFound from "./pages/NotFoundPage/NotFoundPage"
import {userState} from "react"
 
function App() {
  const [user, setUser] = userState(false)
  return (
<Routes>
  <Route path={appRoytes.SIGNIN} element={<SigninPage/>}/>
  <Route path={appRoytes.SIGNUP} element={<SignupPage/>}/>
  <Route path={appRoytes.NOT_FOUND} element={<NotFound/>}/>
</Routes>
  )
}

export default App