
export interface ICharacteristic {
    name: string,
    icon: string,
    value: string,
}

export interface IService {
    ID: number;
    name: string;
    link: string;
    description: string;
    price: string;
/*     category: any[];
 */    gallery: Gallery[];
    characteristics: ICharacteristic[];
    icon: string;
    icon_active: string;
  }
  
  export interface Gallery {
    title: string;
    alt: string;
    src: string;
  }