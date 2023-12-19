import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import FormLayout from "./SignInForm/FormLayout.js";
import Homepage from "./HomePage/Homepage.js";
import Browse from "./BrowseNetflix/Browse.js";
import VideoPlayer from "./VideoPlayer/VideoPlayer.js";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <FormLayout />,
    },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/:id",
      element: <VideoPlayer />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default Body;
