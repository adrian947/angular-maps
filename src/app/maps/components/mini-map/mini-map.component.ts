import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import maplibregl, { LngLat, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {
  public map!: maplibregl.Map;

  @Input() lngLat?: [number, number];

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.lngLat) return;
    this.map = new maplibregl.Map({
      container: this.divMap?.nativeElement,
      style: environment.map_styles,
      center: this.lngLat,
      zoom: 12,
      interactive: false
    });

    const currentLatLgn: LngLat = new LngLat(this.lngLat[0], this.lngLat[1]);

    new Marker()
      .setLngLat(currentLatLgn)
      .addTo(this.map);
  }
}
