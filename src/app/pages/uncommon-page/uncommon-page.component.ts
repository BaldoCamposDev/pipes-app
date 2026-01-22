import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';

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
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
  ],
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

  // i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Juan',
    'Melissa',
    'Fernando',
    'Grecia',
    'Alberto',
    'Angel',
    'Raquel',
  ]);

  deleteClient() {
    this.clients.update((previous) => previous.slice(1));
  }

  // KeyValuePipe
  profile = {
    name: 'Baldo',
    age: 29,
    address: 'Culiacan, Sinaloa',
  };
}
