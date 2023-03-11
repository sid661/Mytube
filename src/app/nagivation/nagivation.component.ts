import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nagivation',
  templateUrl: './nagivation.component.html',
  styleUrls: ['./nagivation.component.css']
})
export class NagivationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
      
    );
    

  constructor(private breakpointObserver: BreakpointObserver) {}

}
