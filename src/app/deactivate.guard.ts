import { ComponentTwoComponent } from './component-two/component-two.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ComponentTwoComponent> {
    canDeactivate(component: ComponentTwoComponent): boolean {
        if(component.val === '') {
          return confirm('Are you sure, you wanna exit?');
        } else {
          return true;
        }
    }

}
