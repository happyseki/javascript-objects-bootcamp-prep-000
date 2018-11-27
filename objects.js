var playlist = {Slowdive:'Alison'};
var artistName = 'My Bloody Valentine';
var songTitle = 'Sometimes';
function updatePlaylist(playlist,artistName,songTitle){
 playlist.[artistName]=songTitle;
return playlist;
}