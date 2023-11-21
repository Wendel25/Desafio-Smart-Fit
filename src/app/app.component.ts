import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UnitsTrainnerComponent } from "./components/units-trainner/units-trainner.component";
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports:[
      CommonModule,
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      UnitsTrainnerComponent,
      FormsModule,
      MatProgressBarModule
    ]
})

export class AppComponent {
}
