import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { VideoToGIF } from './pages/VideoToGIF.page';
import { Playlist } from './pages/Playlist.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'video-to-gif-converter',
    element: <VideoToGIF />,
  },
  {
    path: 'playlist-tool',
    element: <Playlist />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
