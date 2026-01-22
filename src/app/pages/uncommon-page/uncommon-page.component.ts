import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Baldo',
  age: 28,
  gender: 'male',
  address: 'Baja California, México',
};

const client2 = {
  name: 'Yuney',
  age: 32,
  gender: 'female',
  address: 'sinaloa, México',
};

@Component({
  selector: 'uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }
}
