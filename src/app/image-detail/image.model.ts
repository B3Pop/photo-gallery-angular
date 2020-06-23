export class Image {
  public id: number;
  public category: string;
  public caption: string;
  public url: string;

  constructor(id: number, category: string, caption: string, url: string) {
    this.id = id;
    this.category = category;
    this.caption = caption;
    this.url = url;
  }
}
