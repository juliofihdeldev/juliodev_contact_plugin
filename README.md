# juliodev_contact_plugin
Native plugin IOS /Android 
```
//import plugin 
import { Plugins } from '@capacitor/core';
import 'juliodev-plugin-contact';
const { ContactPlugin } = Plugins;

// load pluging
  async loadContact() {
    this.contacts = (await ContactPlugin.getContacts("test")).results;
    console.log("My contacts: ", this.contacts)
  }
  
