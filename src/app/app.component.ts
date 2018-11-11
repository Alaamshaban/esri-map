import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public destroyed = false;
    public options = {
      latitude:  44.95648,
      longitude: -93.261678,
      layers: [{
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer'
      }],
      scaleBar: true,
      homeButton: true
    };

    public updateCoordinates({latitude, longitude}) {
      this.options = {
        ...this.options,
        latitude,
        longitude
      };
    }

    public updateOptions(options) {
      this.options = {
        ...this.options,
        ...options
      };
    }
}
