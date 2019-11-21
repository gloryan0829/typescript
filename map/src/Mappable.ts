export interface Mapperble {
  location : {
    lat: number;
    lng: number;
  };
  markerContent():string;
}