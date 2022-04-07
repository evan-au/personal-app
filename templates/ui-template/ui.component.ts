import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-ui',
  templateUrl: './ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {
    return;
  }
}
