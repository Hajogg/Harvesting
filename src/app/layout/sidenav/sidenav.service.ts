import { Injectable } from '@angular/core';
import { MatSidenav} from '@angular/material';

@Injectable()
export class SidenavService {
  private sidenav: MatSidenav;

  /**
   * Setter for sidenav.
   *
   * @param {MatSidenav} sidenav
   */
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  /**
   * Open this sidenav, and return a Promise that will resolve when it's fully opened (or get rejected if it didn't).
   *
   * @returns Promise<MatSidenavToggleResult>
   */
  public open() {
    return this.sidenav.open();
  }

  /**
   * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get rejected if it didn't).
   *
   * @returns Promise<MatSidenavToggleResult>
   */
  public close() {
    return this.sidenav.close();
  }

  /**
   * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or close() when it's closed.
   *
   * @param {boolean} isOpen  Whether the sidenav should be open.
   *
   * @returns {Promise<MatSidenavToggleResult>}
   */
  public toggle(isOpen?: boolean) {
    return this.sidenav.toggle(isOpen);
  }
}
