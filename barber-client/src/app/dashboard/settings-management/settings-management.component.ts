import {Component} from '@angular/core';
import {PaginatePlaylist, PlaylistService, Video} from '../../api/playlist.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings-management',
  templateUrl: './settings-management.component.html',
  styleUrls: ['./settings-management.component.scss']
})
export class SettingsManagementComponent {
  playlist: PaginatePlaylist;
  form: FormGroup;

  constructor(private  playlistService: PlaylistService) {
    this.form = playlistService.form;
    this.fetchData();
  }

  searchYoutubeVideo(): void {
    const queryParams: string[] = this.form.value.url.match(/[^&?]*?=[^&?]*/g);
    queryParams
      .filter((param) => /^(v=)/.test(param))
      .forEach((param: string) => {
        this.playlistService.create({url: param.replace('v=', '')})
          .subscribe(() => {
            this.form.reset();
            this.fetchData();
          });
      });
  }

  deleteVideo(video: Video): void {
    this.playlistService.delete(video?.id).subscribe(() => {
      this.fetchData();
    });
  }

  private fetchData(): void {
    this.playlistService.all().subscribe((paginateService: PaginatePlaylist) => {
      this.playlist = paginateService;
    });
  }
}
