import { RouteConfig } from "react-router-config";

export interface RouteConfigExtended extends RouteConfig {
  name?: string;
  path: string;
  routes?: RouteConfigExtended[];
}

export interface RouteConfigSidebar extends RouteConfigExtended {
  icon: string;
  routes?: RouteConfigSidebar[];
}
