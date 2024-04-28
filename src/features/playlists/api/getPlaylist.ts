import { useQuery } from '@tanstack/react-query';
import { Playlist } from '../types/index';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const code = import.meta.env.VITE_SOME_KEY;

async function getPlaylist(playlistUrl: string) {
  const url = `${BASE_URL}code=${code}&url=${playlistUrl}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

export function usePlaylist(playlistUrl: string) {
  return useQuery<Playlist>({
    queryKey: ['playlistResults'],
    queryFn: () => getPlaylist(playlistUrl),
  });
}
