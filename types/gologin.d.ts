// gologin.d.ts

import { ChildProcess } from "child_process";
import { IncomingMessage } from "http";
import { SocksProxyAgent } from "socks-proxy-agent";

interface GoLoginOptions {
  remote?: boolean;
  token?: string;
  profile_id?: string;
  password?: string;
  extra_params?: any;
  executablePath?: string;
  vncPort?: number;
  isCloudHeadless?: boolean;
  isNewCloudBrowser?: boolean;
  autoUpdateBrowser?: boolean;
  skipOrbitaHashChecking?: boolean;
  uploadCookiesToServer?: boolean;
  writeCookiesFromServer?: boolean;
  remote_debugging_port?: number;
  timezone?: string;
  args?: string[];
  restoreLastSession?: boolean;
  tmpdir?: string;
}

interface Profile {
  navigator?: any;
  fonts?: any;
  os?: string;
  resolution?: string;
  language?: string;
  geolocation?: any;
  name?: string;
  proxy?: any;
  bookmarks?: any;
}

interface Preferences {
  navigator?: any;
  mediaDevices?: any;
  webRtc?: any;
  extensions?: any;
  gologin?: any;
}

class GoLogin {
  constructor(options?: GoLoginOptions);

  checkBrowser(): Promise<any>;
  setProfileId(profile_id: string): Promise<void>;
  getToken(username: string, password: string): Promise<void>;
  getNewFingerPrint(os: string): Promise<any>;
  profiles(): Promise<any>;
  getProfile(profile_id?: string): Promise<Profile>;
  emptyProfile(): Promise<string>;
  getProfileS3(s3path: string): Promise<Buffer>;
  postFile(fileName: string, fileBuff: Buffer): Promise<void>;
  emptyProfileFolder(): Promise<Buffer>;
  convertPreferences(preferences: Preferences): Preferences;
  createBrowserExtension(): Promise<void>;
  extractProfile(path: string, zipfile: string): Promise<void>;
  createStartup(local?: boolean): Promise<string>;
  commitProfile(): Promise<void>;
  profilePath(): string;
  orbitaExtensionPath(): string;
  getRandomInt(min: number, max: number): number;
  checkPortAvailable(port: number): Promise<boolean>;
  getRandomPort(): Promise<number>;
  getTimeZone(proxy: any): Promise<string>;
  getTimezoneWithSocks(params: any): Promise<string>;
  spawnArguments(): Promise<string[]>;
  spawnBrowser(): Promise<string>;
  createStartupAndSpawnBrowser(): Promise<string>;
  clearProfileFiles(): Promise<void>;
  stopAndCommit(options: any, local?: boolean): Promise<boolean>;
  stopBrowser(): Promise<void>;
  killBrowser(): void;
  killAndCommit(options: any, local?: boolean): Promise<void>;
  sanitizeProfile(): Promise<void>;
  getProfileDataToUpdate(): Promise<Buffer>;
  profileExists(): Promise<boolean>;
  getRandomFingerprint(options: any): Promise<any>;
  create(options: any): Promise<string>;
  createCustom(options: any): Promise<string>;
  delete(pid?: string): Promise<void>;
  update(options: any): Promise<any>;
  setActive(is_active: boolean): void;
  getGeolocationParams(
    profileGeolocationParams: any,
    tzGeolocationParams: any
  ): any;
  getViewPort(): any;
  postCookies(profileId: string, cookies: any[]): Promise<any>;
  getCookies(profileId: string): Promise<any>;
  writeCookiesToFile(): Promise<void>;
  uploadProfileCookiesToServer(): Promise<void>;
  saveBookmarksToDb(): Promise<void>;
  start(): Promise<{ status: string; wsUrl: string }>;
  startLocal(): Promise<{ status: string; wsUrl: string }>;
  stop(): Promise<void>;
  stopLocal(options?: any): Promise<void>;
  waitDebuggingUrl(
    delay_ms: number,
    try_count?: number,
    remoteOrbitaUrl?: string
  ): Promise<string>;
  startRemote(
    delay_ms?: number
  ): Promise<{ status: string; wsUrl?: string; message?: string }>;
  stopRemote(): Promise<any>;
  getAvailableFonts(): string[];
  changeProfileResolution(resolution: string): Promise<void>;
  changeProfileUserAgent(userAgent: string): Promise<void>;
  changeProfileProxy(proxyData: any): Promise<void>;
}

export { GoLogin, GoLoginOptions, Profile, Preferences };
  import { ChildProcess } from "child_process";
  import { IncomingMessage } from "http";
  import { SocksProxyAgent } from "socks-proxy-agent";

  interface GoLoginOptions {
    remote?: boolean;
    token?: string;
    profile_id?: string;
    password?: string;
    extra_params?: any;
    executablePath?: string;
    vncPort?: number;
    isCloudHeadless?: boolean;
    isNewCloudBrowser?: boolean;
    autoUpdateBrowser?: boolean;
    skipOrbitaHashChecking?: boolean;
    uploadCookiesToServer?: boolean;
    writeCookiesFromServer?: boolean;
    remote_debugging_port?: number;
    timezone?: string;
    args?: string[];
    restoreLastSession?: boolean;
    tmpdir?: string;
  }

  interface Profile {
    navigator?: any;
    fonts?: any;
    os?: string;
    resolution?: string;
    language?: string;
    geolocation?: any;
    name?: string;
    proxy?: any;
    bookmarks?: any;
  }

  interface Preferences {
    navigator?: any;
    mediaDevices?: any;
    webRtc?: any;
    extensions?: any;
    gologin?: any;
  }

  class GoLogin {
    constructor(options?: GoLoginOptions);

    checkBrowser(): Promise<any>;
    setProfileId(profile_id: string): Promise<void>;
    getToken(username: string, password: string): Promise<void>;
    getNewFingerPrint(os: string): Promise<any>;
    profiles(): Promise<any>;
    getProfile(profile_id?: string): Promise<Profile>;
    emptyProfile(): Promise<string>;
    getProfileS3(s3path: string): Promise<Buffer>;
    postFile(fileName: string, fileBuff: Buffer): Promise<void>;
    emptyProfileFolder(): Promise<Buffer>;
    convertPreferences(preferences: Preferences): Preferences;
    createBrowserExtension(): Promise<void>;
    extractProfile(path: string, zipfile: string): Promise<void>;
    createStartup(local?: boolean): Promise<string>;
    commitProfile(): Promise<void>;
    profilePath(): string;
    orbitaExtensionPath(): string;
    getRandomInt(min: number, max: number): number;
    checkPortAvailable(port: number): Promise<boolean>;
    getRandomPort(): Promise<number>;
    getTimeZone(proxy: any): Promise<string>;
    getTimezoneWithSocks(params: any): Promise<string>;
    spawnArguments(): Promise<string[]>;
    spawnBrowser(): Promise<string>;
    createStartupAndSpawnBrowser(): Promise<string>;
    clearProfileFiles(): Promise<void>;
    stopAndCommit(options: any, local?: boolean): Promise<boolean>;
    stopBrowser(): Promise<void>;
    killBrowser(): void;
    killAndCommit(options: any, local?: boolean): Promise<void>;
    sanitizeProfile(): Promise<void>;
    getProfileDataToUpdate(): Promise<Buffer>;
    profileExists(): Promise<boolean>;
    getRandomFingerprint(options: any): Promise<any>;
    create(options: any): Promise<string>;
    createCustom(options: any): Promise<string>;
    delete(pid?: string): Promise<void>;
    update(options: any): Promise<any>;
    setActive(is_active: boolean): void;
    getGeolocationParams(
      profileGeolocationParams: any,
      tzGeolocationParams: any
    ): any;
    getViewPort(): any;
    postCookies(profileId: string, cookies: any[]): Promise<any>;
    getCookies(profileId: string): Promise<any>;
    writeCookiesToFile(): Promise<void>;
    uploadProfileCookiesToServer(): Promise<void>;
    saveBookmarksToDb(): Promise<void>;
    start(): Promise<{ status: string; wsUrl: string }>;
    startLocal(): Promise<{ status: string; wsUrl: string }>;
    stop(): Promise<void>;
    stopLocal(options?: any): Promise<void>;
    waitDebuggingUrl(
      delay_ms: number,
      try_count?: number,
      remoteOrbitaUrl?: string
    ): Promise<string>;
    startRemote(
      delay_ms?: number
    ): Promise<{ status: string; wsUrl?: string; message?: string }>;
    stopRemote(): Promise<any>;
    getAvailableFonts(): string[];
    changeProfileResolution(resolution: string): Promise<void>;
    changeProfileUserAgent(userAgent: string): Promise<void>;
    changeProfileProxy(proxyData: any): Promise<void>;
  }

  export { GoLogin, GoLoginOptions, Profile, Preferences };
}
