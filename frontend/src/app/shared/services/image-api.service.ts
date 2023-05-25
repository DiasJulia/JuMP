import { HttpClient } from '@angular/common/http';
import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, take } from 'rxjs/operators';

@Injectable()
export class ImageApiService {
  constructor(
    private readonly http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  public getFlowGraph() {
    return this.http
      .get('http://localhost:8000/api/visualization/image/', {
        responseType: 'text',
      })
      .pipe(
        take(1),
        map((res: string) =>
          this.sanitizer.sanitize(
            SecurityContext.HTML,
            this.sanitizer.bypassSecurityTrustHtml(res)
          )
        )
      );
  }
}
