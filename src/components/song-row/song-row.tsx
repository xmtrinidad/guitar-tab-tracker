import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'song-row',
  styleUrl: 'song-row.css',
  shadow: true,
})
export class SongRow {

  render() {
    return (
      <div class="song-row">
        <div class="song-container">
          <div class="song-name">
            <span>Nothing Else Matters (<a href="#">Tab</a> <a href="#">Listen</a>)</span>
          </div>
          <div class="song-artist">Metallica</div>
        </div>
        <div class="song-status">
          <span>In Progress</span>
        </div>
      </div>
    );
  }

}
