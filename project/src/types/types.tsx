export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IHotelsHost {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface ICityLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IHotels {
  bedrooms: number;
  city: {
    location: ICityLocation;
    name: string;
  }
  description: string;
  goods: string[];
  host: IHotelsHost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: ILocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface IUser {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}

export interface IComment {
    comment: string
    date: string
    id: number
    rating: number
    user: IUser
  }


