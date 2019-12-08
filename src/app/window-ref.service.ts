import { Injectable } from '@angular/core';

const _window = (): any => {
  // return the global native browser window object
  return window;
};

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  get nativeWindow(): any {
    return _window();
  }
}
