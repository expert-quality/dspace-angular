/* tslint:disable:no-empty */
import { Observable, of as observableOf } from 'rxjs';

export class AuthServiceMock {
  public checksAuthenticationToken() {
    return;
  }
  public buildAuthHeader() {
    return 'auth-header';
  }

  public getShortlivedToken(): Observable<string> {
    return observableOf('token');
  }

  public isAuthenticated(): Observable<boolean> {
    return observableOf(true);
  }

  public setRedirectUrl(url: string) {
  }
}
