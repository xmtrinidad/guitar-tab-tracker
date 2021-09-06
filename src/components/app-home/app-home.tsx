import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        {/* <div class="tabs">
          <button>Tabs</button>
          <button>Practice</button>
        </div> */}
        <div class="tabs-table">
          <div class="tabs-table-header">
            <span>Song</span>
            <span>Status</span>
          </div>
          <div class="tabs-table-body">
            <song-row></song-row>
          </div>
        </div>
        {/* <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link> */}
      </div>
    );
  }
}
