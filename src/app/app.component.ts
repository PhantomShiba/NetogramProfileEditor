import { Component } from '@angular/core';
import { ProfileEditComponent} from "./profile-edit/profile-edit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileEditComponent],
  template: '<app-profile-edit></app-profile-edit>'
})
export class AppComponent {
  title = 'ProfileEditor';

}
