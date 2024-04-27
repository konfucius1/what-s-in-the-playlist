import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Search } from '@/components/Search/Search';

export function HomePage() {
  return (
    <>
      <Welcome />
      <Search />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
