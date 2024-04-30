import { Welcome } from '../components/Welcome/Welcome';
import { Search } from '@/components/Search/Search';
import { VideoList } from '@/features/playlists/components/VideoList/VideoList';

export function Playlist() {
  return (
    <>
      <Welcome />
      <Search />
      <VideoList />
    </>
  );
}
