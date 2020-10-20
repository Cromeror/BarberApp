import {Component} from '@angular/core';
import {PaginatePlaylist, PlaylistService} from '../../api/playlist.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings-management',
  templateUrl: './settings-management.component.html',
  styleUrls: ['./settings-management.component.scss']
})
export class SettingsManagementComponent {
  playlist: PaginatePlaylist;
  showNewVideoModal = false;
  form: FormGroup;

  constructor(private  playlistService: PlaylistService) {
    this.form = playlistService.form;
    this.playlistService.all().subscribe((paginateService: PaginatePlaylist) => {
      this.playlist = paginateService;
    });
  }

  handleOk(): void {
    // this.playlistService.create({})
    //   .subscribe(() => {
    //     this.showNewVideoModal = false;
    //   });
  }

  searchYoutubeVideo(): void {

  }
}
