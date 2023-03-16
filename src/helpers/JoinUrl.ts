export class JoinUrl {
  constructor(
    public rootUrl: string,
    public paths: (string | number)[] = []
  ) {}

  private cleanSlash(address: string | number) {
    const stringAddress = address + '';
    const cleanedAddress = stringAddress.replace('/', '');

    return cleanedAddress;
  }

  join() {
    const cleanedPaths: string[] = this.paths
      .map((address: string | number) => this.cleanSlash(address));
    const relativePath = cleanedPaths.join('/');
    const rootUrl = this.rootUrl + '/';

    return rootUrl + relativePath;
  }
};
