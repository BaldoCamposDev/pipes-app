import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-page.component',
  imports: [],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent { }
