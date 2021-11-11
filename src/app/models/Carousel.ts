export class Carousel {
  images: Array<CarouselImage>;
  restartFace = false;
  private currentImageIndex = 0;

  constructor(sources: string[]) {
    this.images = new Array<CarouselImage>();
    for(let source of sources) {
      this.images.push(new CarouselImage(source, false));
    }
    this.images[0].show = true;
  }

  nextImage() {
    this.images[this.currentImageIndex].show = false;
    if(this.currentImageIndex == this.images.length - 1) {
      this.restartFace = true;
      this.currentImageIndex = 0;
    } else {
      this.restartFace = false;
      this.currentImageIndex++;
    }
    this.images[this.currentImageIndex].show = true;
  }
}

export class CarouselImage {
  src: string;
  show: boolean;

  constructor(src: string, show: boolean) {
    this.src = src;
    this.show = show;
  }
}
