// Select the carousel container
const carousel = document.querySelector(".carousel");

// List of image filenames
const images = [
  "member1.png",
  "member2.png",
  "member3.png",
  "member4.png",
  "member5.png",
  "member6.png",
  "member7.png",
  "member8.png",
  "member9.png",
  "member10.png",
  "member11.png",
  "member12.png",
  "member13.png",
  "member14.png",
  "member15.png",
  "member16.png",
  "member17.png",
  "member18.png",
  "member19.png"
];

// Function to populate the carousel
const createCarouselItems = () => {
  const allImages = [...images, ...images]; // Duplicate images for smooth looping
  allImages.forEach((image) => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");

    const img = document.createElement("img");
    img.src = `./public/images/${image}`; // Path to images
    img.alt = "Member";

    item.appendChild(img);
    carousel.appendChild(item);
  });
  for (let i = 0; i< allImages.length; i++)
  {
    console.log(allImages[i]);
  }
  console.log(allImages.length);
};

// Initialize carousel items
createCarouselItems();

// Scroll logic
let scrollAmount = 0;

const scrollCarousel = () => {
  scrollAmount += 1; // Adjust the speed here (higher = faster)
  carousel.style.transform = `translateX(-${scrollAmount}px)`; // Move carousel left

  // Reset when the scroll amount exceeds half of the carousel's total width
  if (scrollAmount >= carousel.scrollWidth / 2) {
    scrollAmount = 0; // Reset scroll to create a seamless loop
  }
};

// Start the scrolling effect
setInterval(scrollCarousel, 10); // Adjust interval for smoother or faster scrolling
