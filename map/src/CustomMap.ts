import { Company } from './Company';
import { User } from './User';
import { Mapperble } from './Mappable';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId:string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  public addMarker(mapper: Mapperble):void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapper.location.lat,
        lng: mapper.location.lng
      }
    });

    marker.addListener('click', ()=> {
      const infoWindow = new google.maps.InfoWindow({
        content: mapper.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

}
