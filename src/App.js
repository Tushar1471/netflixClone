import { createBrowserRouter } from "react-router-dom";
import FormLayout from "./components/SignInForm/FormLayout.js";
import Homepage from "./components/HomePage/Homepage.js";
import { RouterProvider } from "react-router-dom";
const App = ()=>{

  const appRouter = createBrowserRouter([
    {
      path:"/login",
      element:<FormLayout/>
    },
    {
      path:"/",
      element:<Homepage/>
    }
  ])
  return(
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App;
