import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './Components/Home/Home'
import LoginForm from './Components/LoginForm/LoginForm'
import RootLayout from './Components/Root/RootLayout'
import CreateAcc from './Components/CreateAcc/CreateAcc'
import FGpassword from './Components/FGpassword/FGpassword'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginForm/>} >
        <Route path="fgpw" element={<FGpassword/>} />
        <Route path="create" element={<CreateAcc/>} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
