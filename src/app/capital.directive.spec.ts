import { CapitalDirective } from './capital.directive';
import { ElementRef } from '@angular/core';

describe('CapitalDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('input'));
    const directive = new CapitalDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
