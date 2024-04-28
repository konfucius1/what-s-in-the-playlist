import { Loader } from '@mantine/core';
import { usePlaylist } from '../api/getPlaylist';

export function VideoList() {
  const playlistQuery = usePlaylist('PLyuRouwmQCjlrOdLPmPMr04lARwMicfLe');

  if (playlistQuery.isLoading) {
    return (
      <div
        style={{
          width: '100%',
          height: '12rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader />
      </div>
    );
  }

  if (!playlistQuery.data) return null;

  const { items } = playlistQuery.data;
  const videoTitles = items.map((item) => item.snippet.title);

  return (
    <ul>
      {videoTitles.map((title: string) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}
