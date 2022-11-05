/* Instructions:
  • Create an interface "Coords" that has numeric "latitude" and "longitude" properties.
  • Create a new "Info" interface that extends the existing interface "City" by adding a
    "coords" property of type "Coords".
*/

export interface City {
    name: string;
};

export interface Coords {
  latitude: number,
  longtitude: number
};

export interface Info extends City {
  coords: Coords
};

/* [Declare your "Coords" and "Info" interfaces below.] */

// interface Coords {}

// interface Info {}

export let montreal: Info;

export let tampa: Info;