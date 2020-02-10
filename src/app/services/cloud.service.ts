import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url:
        "https://cf-media.sndcdn.com/hKQl1fHfeeuM.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vaEtRbDFmSGZlZXVNLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODEzNzA3NTR9fX1dfQ__&Signature=Z2QoepZhDt6x5h6dhRn3pHrtx-WTwDVTep3UfiSDRxv4qHxzBOYnLCVOQFFiEMgy4SICKnXNLhApr4T3ZOMQtE8-Syryu64mNzWcgc5yG5m3pRwFpHRbSzlzxGzE8mY0Eh6zeDmj-SnwRmO6w286roUM4V2gSpuMGLhG~1r1R3hfD3ZUBDFdCnwpi75R-1NbcxHS47LNGcCq-HuiMWvNc59A1xBCMFCophhQhHUZEHogmUGjjFPr2QMiB4uA-RjOpZgoP47eTWnJrQGWrEWqLHj7Hr5whdVAyLJMhov3vYEmoaIP6XGgy83rU4ZxjnChKRznx8Gqx8NCFDm6uXHLrw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
      title: "Perfect"
    }
  ];

  getFiles() {
    return of(this.files);
  }
}