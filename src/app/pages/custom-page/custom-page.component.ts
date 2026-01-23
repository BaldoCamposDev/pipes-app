import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { heroTextColorPipe as HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { heroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    UpperCasePipe,
    heroSortByPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Baldo Campos');

  upperCase = signal(true);

  toggleCase() {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);
}
