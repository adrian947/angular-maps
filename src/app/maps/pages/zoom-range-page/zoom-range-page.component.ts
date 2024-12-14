import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import maplibregl, { LngLat } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'ng-component3',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  public map!: maplibregl.Map;
  public zoom: number = 12;
  public latLong: LngLat = new LngLat(-57.56112301727905, -38.00543980713936)

  @ViewChild('map')
  public divMap?: ElementRef;
  public inputRange?: ElementRef;

  ngOnDestroy(): void {
    this.map.remove();
  }

  ngAfterViewInit(): void {
    this.map = new maplibregl.Map({
      container: this.divMap?.nativeElement,
      style: environment.map_styles,
      center: this.latLong,
      zoom: this.zoom,
    });

    this.mapListeners()
  }

  mapListeners(){
    if(!this.map) throw new Error('Map not init');

    this.map.on('zoom', ()=>{
      this.zoom = this.map.getZoom();
    })

    this.map.on('move', ()=>{
      this.latLong = this.map.getCenter();
    })
  }

  incrementZoom(){
    this.map.zoomTo(this.zoom + 2)
  }
  decrementZoom(){
    this.map.zoomTo(this.zoom - 2)
  }
  handleChangeInputRange(value: string){
    this.zoom = +value
    this.map.zoomTo(this.zoom)
  }

}
