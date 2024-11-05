export interface IPageOptions{
    ID: number;
    id?: any;
    name?: any;
    link: string;
    title: string;
    description: string;
    keywords: string;
    slogan: string;
    services_carousel?: any;
    backshow_slides: Backshowslides[];
  }
  
  export interface Backshowslides {
    title: string;
    alt: string;
    src: string;
  }