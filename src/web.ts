import { WebPlugin } from '@capacitor/core';
import { ContactPluginPlugin } from './definitions';

export class ContactPluginWeb extends WebPlugin implements ContactPluginPlugin {
  constructor() {
    super({
      name: 'ContactPlugin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getContacts(filter: string): Promise<{ results: any[] }> {
    console.log('filter: ', filter);
    return {
      results: [
        {
          firstName: 'Julio ',
          lastName: 'JEAN FILS',
          telephone: '+509 4818-8105'
        },
        {
          firstName: 'Patrick ',
          lastName: 'JEAN CHARLES',
          telephone: '+509 4818-8007'
        },
        {
          firstName: 'Anita ',
          lastName: 'JEAN PIERRE',
          telephone: '+509 4818-3107'
        }
      ]
      
    };
  }


}

const ContactPlugin = new ContactPluginWeb();

export { ContactPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(ContactPlugin);
