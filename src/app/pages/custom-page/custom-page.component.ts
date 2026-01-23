import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { heroTextColorPipe as HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Baldo Campos');

  upperCase = signal(true);

  toggleCase() {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes);
}
