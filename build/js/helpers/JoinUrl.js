export class JoinUrl {
    constructor(rootUrl, paths = []) {
        this.rootUrl = rootUrl;
        this.paths = paths;
    }
    cleanSlash(address) {
        const stringAddress = address + '';
        const cleanedAddress = stringAddress.replace('/', '');
        return cleanedAddress;
    }
    join() {
        const cleanedPaths = this.paths
            .map((address) => this.cleanSlash(address));
        const relativePath = cleanedPaths.join('/');
        const rootUrl = this.rootUrl + '/';
        return rootUrl + relativePath;
    }
}
;
