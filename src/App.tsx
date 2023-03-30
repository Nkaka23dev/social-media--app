import { createRoutesFromElements, Route, RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import PageLayout from "./components/PageLayout"
import CreatePost from "./pages/CreatePost"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="login" element={<Login />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
