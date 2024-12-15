import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';


@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent {


}
