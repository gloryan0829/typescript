// @ts-ignore
import faker from 'faker';
import { Mapperble } from './Mappable';

export class User implements Mapperble {

  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `UserName : ${this.name}`;
  }

}