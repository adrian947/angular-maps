import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import maplibregl, { LngLat, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { environment } from '../../../../environments/environments';

export interface IMarker {
  marker: Marker;
  color: string;
}

@Component({
  selector: 'ng-component1',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent implements AfterViewInit {
  public map!: maplibregl.Map;
  public currentLatLgn: LngLat = new LngLat(
    -57.56112301727905,
    -38.00543980713936
  );
  public markersList: IMarker[] = [];

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    this.map = new maplibregl.Map({
      container: this.divMap?.nativeElement,
      style: environment.map_styles,
      center: this.currentLatLgn,
      zoom: 12,
    });
  }

  createMarket() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, () =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markersList.push({ marker, color });
  }

  handleRemoveMarket(index: number) {
    this.markersList[index].marker.remove();
    this.markersList.splice(index, 1);
  }
  handleFlyTo(item: IMarker) {
    this.map.flyTo({
      center: item.marker._lngLat,
    });
  }
}
