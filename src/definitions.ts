declare module '@capacitor/core' {
  interface PluginRegistry {
    ContactPlugin: ContactPluginPlugin;
  }
}

export interface ContactPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  getContacts(filter: string): Promise<{results: any[]}>;
}
