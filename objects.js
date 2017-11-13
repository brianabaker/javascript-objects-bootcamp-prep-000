var playlist = {aristName: 'songTitle'}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {[artistName]: songTitle})
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  playlist.delete[artistName];
  return playlist;
}