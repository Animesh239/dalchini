import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { AuthProvider } from "../context/AuthProvider";
import { ProtectedRoute } from "./protectedRoute";
import ErrorPage from "../pages/ErrorPage";
import NoteList from "../components/NoteList";
import Note from "../components/Note";
import { foldersLoader } from '../utils/folderUtils';
import { addNewNote, noteLoader, notesLoader, updateNote } from '../utils/noteUtils';

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
            loader: foldersLoader,
            children: [
              
              {
                path: "folders/:folderId",
                element: <NoteList/>,
                loader: notesLoader,
                action: addNewNote,
                children: [
                  {
                    path: "note/:noteId",
                    element: <Note/>,
                    loader: noteLoader,
                    action: updateNote,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
