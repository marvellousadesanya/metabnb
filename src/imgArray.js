// Basically all image names for the PLACES page
// are stored here.

// Just a function to push all the file names to an array called imgArray

const imgArray = [];
let i;
for (i = 1; i < 17; i++) {
  // Listing names are numbered from 1 to 16.
  imgArray.push("Listing" + i + ".png");
}

// Now we have an array we can export and use.

export default imgArray;
