export class DogInfo {
  id;
  url;
  name;
  description;

  constructor({ id, url, breeds }) {
    this.id = id;
    this.url = url;
    //this.name = breeds[0].name;
    //this.description = breeds[0].description;
  }
}
