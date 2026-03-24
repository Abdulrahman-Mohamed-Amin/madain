import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetIDService {
  private selectedProjectId: BehaviorSubject<number | null>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    let initialId: number | null = null;

    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('selectedProjectId');
      initialId = stored ? Number(stored) : null;
    }

    this.selectedProjectId = new BehaviorSubject<number | null>(initialId);
  }

  setSelectedProject(id: number) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedProjectId', id.toString());
    }
    this.selectedProjectId.next(id);
  }
  

  getSelectedProject() {
    return this.selectedProjectId.asObservable();
  }

  clearSelectedProject() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('selectedProjectId');
    }
    this.selectedProjectId.next(null);
  }
}
