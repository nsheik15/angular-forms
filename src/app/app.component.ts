import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';

  constructor(private router: Router) {}

  goToTdf() {
    this.router.navigate(['/tdf']);
  }
}
