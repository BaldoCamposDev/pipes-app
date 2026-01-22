import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Baldo Campos');

  upperCase = signal(true);

  toggleCase() {
    this.upperCase.set(!this.upperCase());
  }
}
