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
      name: "Perfect",
      artist: " Ed Sheeran"
    },
    {
      // tslint:disable-next-line: max-line-length
      url:
        "https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3",
      name: "Man Atkeya Beparwah",
      artist: "Nusrat Fateh Ali Khan"
    },
    {
      url:
        "https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3",
      name: "Penny Lane",
      artist: "The Beatles"
    }
  ];

  getFiles() {
    return of(this.files);
  }
}