import { Welcome } from '../components/Welcome/Welcome';
import { Search } from '@/components/Search/Search';
import { VideoList } from '@/features/playlists/components/VideoList';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Search />
      <VideoList />
    </>
  );
}
