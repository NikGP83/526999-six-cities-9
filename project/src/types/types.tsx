export interface ICityLocation {
    latitude: number;
    longitude: number;
    zoom: number;
}

export interface IHotels {
  bedrooms: number
city: {
location: ICityLocation;
name: string
}
description: string
goods: [string]
host: {
avatarUrl: string
id: number
isPro: boolean
name: string
}
id: number
images: [string]
isFavorite: boolean
isPremium: boolean
location: {
latitude: number
longitude: number
zoom: number
}
maxAdults: number
previewImage: string
price: number
rating: number
title: string
type: string
}
