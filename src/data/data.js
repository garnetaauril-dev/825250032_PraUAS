// Semua data teks ada di sini supaya komponen tetap pendek dan mudah dibaca.
// Gambar: taruh file di folder public/img/ dengan nama sesuai "img" di bawah (jpg).
// Kalau file belum ada, komponen <Pic /> otomatis menampilkan gradient laut.

export const menuItems = [
  { label: "Home", sub: [{ label: "Home", to: "/" }, { label: "Home Two", to: "/home-two" }] },
  { label: "Yesht Rent", sub: [{ label: "Our Yachts", to: "#" }] },
  {
    label: "Destinations",
    sub: [
      { label: "Popular Destinations", to: "#" },
      { label: "Destinations Details", to: "#" },
    ],
  },
  { label: "Blog", sub: [{ label: "Blog Grid", to: "#" }] },
  { label: "Contact", to: "#" },
];

export const heroSlides = [
  { img: "hero1", title: "Our Premier Boats", text: "Enjoy the perfect service and luxury" },
  { img: "hero2", title: "Luxury Yacht Charter", text: "Sail the world in absolute comfort" },
];

export const heroTwoSlides = [
  { img: "hero-two-1", title: "Boats and Yacht Rental" },
  { img: "hero-two-2", title: "Boats and Yacht Rental" },
];

export const aboutPoints = [
  { title: "Exciting Places", text: "Lorem ipsum scelerisque molestie id molestie magna etiam sollicitudin tempus consectetur conubia, the nunc." },
  { title: "Different Yachts", text: "Lorem ipsum scelerisque molestie id molestie magna etiam sollicitudin tempus consectetur conubia, the nunc." },
];

export const fleet = [
  { name: "Aperahama Yacht", img: "fleet1" },
  { name: "Pershing 2023 Yacht", img: "fleet2" },
  { name: "Parahita Yacht", img: "fleet3" },
];

export const offers = [
  { name: "Yacht", icon: "fa-anchor" },
  { name: "Yacht Charters", icon: "fa-dharmachakra" },
  { name: "Management", icon: "fa-shuffle" },
];

// kelas "big/tall/wide" dipakai untuk mengatur ukuran kotak di grid destinasi
export const destinations = [
  { name: "Switzerland", img: "dest1", cls: "d-big" },
  { name: "United Kingdom", img: "dest2", cls: "d-tall" },
  { name: "Bangladesh", img: "dest3", cls: "d-small" },
  { name: "Thailand", img: "dest4", cls: "d-small" },
  { name: "Singapore", img: "dest5", cls: "d-small" },
  { name: "Dubai Desert", img: "dest6", cls: "d-small" },
  { name: "Middle East", img: "dest7", cls: "d-tall2" },
];

export const counters = [
  { number: 914, label: "Yachts to See" },
  { number: 124, label: "Charter Destination" },
  { number: 75, label: "Year in Business" },
  { number: 85, label: "Yachts Sold" },
];

const lorem =
  "Vestibulum eu quam nec neque pellentesqe efficitur id eget nisl. Proin porta est convall lacus blandit pretium sed non enim. Maece lacinia non orci at aliquam.";

export const features = [
  { title: "Charter Guide", icon: "fa-gear", text: lorem },
  { title: "TV And Music", icon: "fa-tv", text: lorem },
  { title: "Yacht Service", icon: "fa-chart-line", text: lorem },
  { title: "Free Wifi", icon: "fa-wifi", text: lorem },
  { title: "Event Planing", icon: "fa-people-group", text: lorem },
  { title: "Unbiased global", icon: "fa-globe", text: lorem },
];

export const testimonialsHome = [
  { name: "Rakib Roni", img: "user1" },
  { name: "Lisa J. Franco", img: "user2" },
  { name: "Mydul Islam", img: "user3" },
];

export const team = [
  { name: "James Estrada", role: "Captain", img: "team1" },
  { name: "Albert Keys", role: "Second Captain", img: "team2" },
  { name: "Anthony Allen", role: "Skipper", img: "team3" },
  { name: "Micah Click", role: "Skipper", img: "team4" },
];

export const newsBig = { title: "Top Gorgeous Yachts In The History Of The Boat Sailing", tag: "Boat Trip", img: "news-big" };
export const newsSmall = [
  { title: "Explorer yacht unveils exciting itinerary...", img: "news1" },
  { title: "Enjoy the view of the shore from a yacht...", img: "news2" },
  { title: "Bahamas announce new yacht charter tax...", img: "news3" },
  { title: "Superyacht set to join the charter fleet...", img: "news4" },
];

// ---------- Home Two ----------
export const bookingCards = [0, 1, 2]; // 3 kartu "Book For Activities" di bawah
export const boatOptions = ["Boat Meters", "Saab", "Opel", "Audi"];

export const testimonialsTwo = [
  { name: "Maydul Islam", date: "Nov 2022, Charter Sailboat", img: "user-a" },
  { name: "Mariya Soniya", date: "Nov 2022, Charter Sailboat", img: "user-b" },
  { name: "Rakib Hasan", date: "Dec 2022, Charter Sailboat", img: "user-c" },
  { name: "Lisa Franco", date: "Jan 2023, Charter Sailboat", img: "user-d" },
];
export const testimonialText =
  "“Thanks to Floaty's bookings attitudes durings charter week, we had amazing The Saronic Islands.Floaty makes uss Week a one-time I first rented a yacht Langong in 1999...”";

export const whyChoose = [
  { title: "Skippered charter", icon: "fa-life-ring" },
  { title: "Skippered charter", icon: "fa-dharmachakra" },
  { title: "Super easy crud", icon: "fa-user-tie" },
  { title: "There's whole crud", icon: "fa-basket-shopping" },
  { title: "Cabin cruiser", icon: "fa-sailboat" },
  { title: "Skippered Charter", icon: "fa-scissors" },
  { title: "Boat Sailing", icon: "fa-person-rowing" },
  { title: "5Star Hotels", icon: "fa-star" },
  { title: "Event Planning", icon: "fa-calendar-days" },
];

export const seasons = [
  { name: "Boats De La Presquile", place: "CENTRAL CROATIA", price: 7500, img: "season1" },
  { name: "Aquavita Boats", place: "New York USA", price: 8500, img: "season2" },
  { name: "Axioma Boats", place: "CENTRAL CROATIA", price: 7200, img: "season3" },
  { name: "Alphas Yacht", place: "New York USA", price: 7600, img: "season4" },
  { name: "Turners Yacht", place: "CENTRAL CROATIA", price: 6400, img: "season5" },
  { name: "Bali Seagull", place: "New York USA", price: 7100, img: "season6" },
];

export const exhibition = ["ex1", "ex2", "ex3", "ex4", "ex5"];

export const plans = [
  { name: "Basic Package", price: 55, dark: false, off: [3, 4] },
  { name: "Regular Package", price: 60, dark: true, off: [3] },
  { name: "Deluxe Package", price: 80, dark: false, off: [] },
];
export const planFeatures = ["Free breakfast", "Free Champagne", "Special Treatment", "24/7 Full Support", "Delicious dinar"];

export const blogsTwo = [
  { title: "Bahamas announce new yacht charter tax...", img: "blog1" },
  { title: "Superyacht set to join the charter fleet...", img: "blog2" },
  { title: "Explorer yacht unveils exciting itinerary...", img: "blog3" },
  { title: "Enjoy the view of the shore from a yacht...", img: "blog4" },
  { title: "Deserts in Canada: Arizona's Arid, Artistic Desert Oasis", img: "blog5" },
  { title: "Jungles In Australia: Vermont's Rugged, Retro Ski Mountain", img: "blog6" },
];

export const footerLinks = ["Home", "Yesht Rent", "Destination", "Pages", "Blog", "Contact"];
export const gallery = ["g1", "g2", "g3", "g4"];
