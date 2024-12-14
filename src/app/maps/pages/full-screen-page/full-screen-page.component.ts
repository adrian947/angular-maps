import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPageComponent implements AfterViewInit {
  public map!: maplibregl.Map;

  @ViewChild('map')
  public divMap?: ElementRef

  ngAfterViewInit(): void {
    this.map = new maplibregl.Map({
      container: this.divMap?.nativeElement,
      style: environment.map_styles,
      center: [-57.56112301727905, -38.00543980713936],
      zoom: 12,
    });
  }
}
