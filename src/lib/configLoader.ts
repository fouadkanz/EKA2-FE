import symbiosisConfig from '../config/symbiosisConfig.json';
import eka2Config from '../config/eka2Config.json';

export interface Config {
  components: {
    chatWindow: boolean;
    sideMenu: {
      tabName: string;
    }[];
    navbar: boolean;
  };
  apiBaseUrl: string;
}

const loadConfig = (appName: string): Config => {
  switch (appName) {
    case 'symbiosis':
      return symbiosisConfig;
    case 'eka2':
      return eka2Config;
    default:
      throw new Error(`Unknown app name: ${appName}`);
  }
};

export default loadConfig;
