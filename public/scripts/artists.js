/* socials consts */
const WEBSITE = "website";
const FEDI = "fedi";
const BSKY = "bsky";
const THREADS = "threads";
const INSTA = "insta";
const FB = "fb";

/* 
  {
    name: "",
    imgSrc: "",
    imgAlt: "",
    blurb: "",
    socials: {
      website: "",
      fedi: "",
      bsky: "",
      threads: "",
      insta: "",
      fb: ""
    }
  }
*/

let artists = [
  {
    name: "Abigail",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Abigail.jpg?v=1723744143637",
    imgAlt:
      "old photo of the artists hiding behind their hair, it has been digitally edited to be green and embossed with leaf like veins running across it.",
    blurb:
      "<p>offering several pride flag inspired mandala phone backgrounds</p>",
    socials: {
      website: "https://linktr.ee/alien_sunset",
      fedi: "https://dice.camp/@Alien_Sunset",
    },
  },
  {
    name: "Adhémara",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Adhemara.jpg?v=1723688649687",
    imgAlt:
      "A pixel art portrait. It depicts a white person with long and fluffy hairs (most of them are white but a few strands are black). The person wears blue jewellery and has several piercings on their face. The background is a night sky with a huge full moon.",
    blurb:
      "<p>I will give at least one digital artwork (a phone wallpaper). I may provide more if my health allows it. The art will always be a scan of a traditional piece I will make for the occasion, which will be an abstract painting.</p>",
    socials: {
      fedi: "https://mastodon.art/@adhemara",
    },
  },
  {
    name: "Alex T. Dragonson",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Alex-T-Dragonson.jpg?v=1723605694757",
    imgAlt: "A pair of hand-knitted gloves with spiral stripes",
    blurb:
      "<p>Hand-knitted scarves to keep you warm in our Northern Hemisphere winter of discontent.</p>",
    socials: {
      website: "https://wizardofdocs.neocities.org/obscure-joys",
      fedi: "https://wandering.shop/@wizardofdocs",
    },
  },
  {
    name: "Anaïs Faë",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Anais-Fae.jpg?v=1724078528616",
    imgAlt: "watercolor portrait of a tabby cat",
    blurb:
      "<p>a design for the sticker sheet, plus eventually some small prints or postcards</p>",
    socials: {
      website: "https://anaisfae.art",
      fedi: "https://mastodon.art/@anaisfae",
      bsky: "https://bsky.app/profile/anaisfae.art",
      insta: "https://www.instagram.com/anaisfae.art/",
    },
  },
  {
    name: "Cassowary",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Cassowary.jpg?v=1723688899713",
    imgAlt:
      "A synthwave gradient sun with a superimposed drawing of a cassowary head and neck.",
    blurb:
      "<p>I will provide a small abstract physical artwork (around 5x7 inches, pen on paper) and a sticker design.</p>",
    socials: {
      website: "https://aldercone.studio",
      fedi: "https://mastodon.art/@aldercone",
    },
  },
  {
    name: "Colin Knowles",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Colin-Knowles.jpg?v=1723693286321",
    imgAlt:
      "Photo shows Colin wearing a red shirt with lil flamingoes all over it",
    blurb: "<p>Digital landscape drawing of scenery in pride flag colors.</p>",
    socials: {
      insta: "https://www.instagram.com/cadmium.rust/",
    },
  },
  {
    name: "Emmett",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Emmett.jpg?v=1723651745939",
    imgAlt:
      "a high contrast photo of a daisy that has had many of its petals eaten. Over the flower text reads protean art",
    blurb:
      "<p>A twelve inch circle canvas acrylic painting. A free form background made of trans pride colors, main subject to be determined.</p>",
    socials: {
      website: "https://proteanart.xyz",
      insta: "https://www.instagram.com/_proteanart_/",
    },
  },
  {
    name: "erosdiscordia",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/erosdiscordia.jpg?v=1723758325588",
    imgAlt:
      "Depicts a tall green electrical box on a sidewalk in New Orleans. The top of the box is graffiti saying 'Live A Great Story' in a white circle. The base of the box is covered in 'Homo Riot' flyers. The background is a very old red brick wall.",
    blurb:
      "<p>I create art postcards, collaged from vintage magazines and decorated with a variety of materials. I'll offer a pack of five from an assortment to choose from.</p>",
    socials: {
      website: "https://erosdiscordia.nekoweb.org",
      fedi: "https://onycha.monster/@erosdiscordia",
    },
  },
  {
    name: "evel",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/evel.png?v=1723657541599",
    imgAlt:
      "rainbow gradient-ed photo of a fat Indigenerd sitting next to their Malamute, they are both smiling! Theree's also 'evel' in a funky grungey font over the image.",
    blurb:
      "<p>i plan to make a funky trans-colored and/or rainbow-colored butterfly, possibly sitting on a skull or flower. Or maybe a set of rainbow/trans colored flowers. I haven't quite decided yet!</p>",
    socials: {
      website: "https://evel.life",
      fedi: "https://mastodon.art/@aldercone",
    },
  },
  {
    name: "Ezra Wu",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Ezra-Wu.jpg?v=1723559260214",
    imgAlt:
      "A simple watercolor of a person holding their hands over their ears, their hair grown over with blue-purple flowers.",
    blurb:
      "<p>The original gouache painting of 'testosterone gave me my anger back' originally published in 'T the Zine', 3x8 inch</p>",
    socials: {
      website: "https://nebulos.space/",
      fedi: "https://comicscamp.club/@nebulos",
    },
  },
  {
    name: "JennyFluff",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/JennyFluff.jpg?v=1723816678281",
    imgAlt:
      "a yellow cat with a light blue bow-tie on its head in the style of cats in the Pepper & Carrot comics by David Revoy",
    blurb:
      "<p>I intend to offer my painting 178, 'Stop. Breaking. The. World.'</p>",
    socials: {
      website: "https://kittenme.ws",
      fedi: "https://chitter.xyz/@JennyFluff/",
    },
  },
  {
    name: "Karl Liferstate",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Karl-Liferstate.jpg?v=1723523619118",
    imgAlt:
      "An orange-toned, highly pixelated head & shoulders portrait of a a white person with brown hair wearing a black shirt.",
    blurb:
      "<p>I make paper collages from whatever comes to hand, working in an intuitive, semi-abstract style that tends toward the fantastical.</p>",
    socials: {
      fedi: "https://mas.to/@liferstate",
    },
  },
  {
    name: "Kite",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Kite.png?v=1723574480908",
    imgAlt:
      "A pixel art image of a green anthro bird, with an orange beak, wearing eyeglasses and a cadet-style hat. They are in front of a nonbinary pride flag.",
    blurb:
      '<p>A 12x12 custom art composition using melty-beads (Perler/Hama/Artkal). Or a custom furry art badge made of melty-beads. <a href="https://drive.google.com/drive/folders/1RvCtn6KMUEj_K2NHYQ6HvD0Q4s_rY3ou?usp=sharing">Examples</a></p>',
    socials: {
      fedi: "https://mastoart.social/@Kite",
    },
  },
  {
    name: "lee",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/lee.jpg?v=1723513034417",
    imgAlt:
      "A white person standing behind fluffy yellow flowers on slender branches, face framed by the flowers. Ze is looking slightly down and to the side and smiling slightly. Ze has curly light brown hair with a side shave, octagonal glasses, and cyan-and-orange eyeshadow.",
    blurb: "<p>collaborative sticker sheet(s)! and this whole site</p>",
    socials: {
      website: "https://leecat.art",
      fedi: "https://strangeobject.space/@inherentlee",
    },
  },
  {
    name: "Liam Woodard",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Liam-Woodard.png?v=1723651589460",
    imgAlt:
      "A man in a button down shirt and an n95 mask. His arms are outstretched against a sky that runs a white to blue gradient. He is held in the air above his acrobatics partner's head, the back of which is visible.",
    blurb:
      "<p>A run of linocut trans anarchy symbols printed onto rainbow gelprinted backgrounds.</p>",
    socials: {
      website: "https://socialgaff.whirling.top",
      fedi: "https://cathode.church/@SocialGaff",
    },
  },
  {
    name: "mari",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/mari.jpg?v=1723517595555",
    imgAlt:
      "A flat vector illustration of a chubby round cartoony hippo type creature - a Moomin - with a shock of green hair between two stand-up ears. One ear has a blue earring hoop. The hair flops down towards happy closed eyes. They're raising a mug in greeting in one hand or paw - white mug with a purple heart and yellow tea bag label hanging out. The black outlines complete the non-binary flag colors hee hee. On the medium-tan colored Moomin is a grey sleeveless shirt with the word plantifa (plants plus antifa) in brown letters over three green sprigs mimicking the Iron Front anti-fascist arrows.",
    blurb:
      "<p>some sort of fun, hopeful, nature-inspired collage piece(s) - most likely postcard-size.</p>",
    socials: {
      fedi: "https://spanner.works/@bouncinglime",
    },
  },
  {
    name: "Nicky Roscoe-Calvert",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Nicky-Roscoe-Calvert.jpg?v=1723938943299",
    imgAlt:
      "Head and shoulders of a white person with short, wavy, deep blue hair. They wear a gold headband in the shape of leaves, teardrop shaped earrings, a thin black scarf and a dark red shawl. They have lip and nose rings, and are wearing heavy, smoky purple eyeshadow. They are looking to the side, smiling at something unseen.",
    blurb:
      "<p>An A3 original mixed media piece, probably involving painting and drawing, probably of mushrooms.</p>",
    socials: {
      fedi: "https://mastodon.art/@SpellsAgainstCivilisation",
      insta: "https://www.instagram.com/spells_against_civilisation/",
    },
  },
  {
    name: "RAPIDPUNCHES",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/RAPIDPUNCHES.png?v=1723907527766",
    imgAlt:
      "Close up of a red crocodile with yellow eyes in a high blue collar wearing a green fish hat.",
    blurb:
      "<p>5x7 inch matte 215gsm exclusive prints of digitally illustrated shark athletes. Additional runner illustration for sticker sheet.</p>",
    socials: {
      fedi: "https://mastodon.art/@rapidpunches",
      bsky: "https://bsky.app/profile/rapidpunches.bsky.social",
      insta: "https://www.instagram.com/rapid.punches",
    },
  },
  {
    name: "Roarke",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Roarke.jpg?v=1723861944206",
    imgAlt: "My original character/mascot Ciaran with cat-ear headphones",
    blurb:
      "<p>I'll be offering one digital illustration made for the exhibit + a sticker sheet design for printing</p>",
    socials: {
      website: "http://lavenderincubus.art",
      fedi: "https://mastodon.art/@LavenderIncubus",
      bsky: "https://bsky.app/profile/lavenderincubus.bsky.social",
    },
  },
  {
    name: "Russ Sharek",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Russ-Sharek.png?v=1723653479849",
    imgAlt:
      "A cartoon version of myself saying 'yes' which was created by prahou of #unix_surrealism",
    blurb:
      "<p>A run of linocut prints of the phrase 'o pana e kon' rendered in sitelen sitelen glyphs.</p><p>Translated from toki pona, this essentially means 'breathe' or 'exhale'.</p><p>These are things you can only really do when you feel safe.</p>",
    socials: {
      website: "https://russ.whirling.top",
      fedi: "https://mastodon.art/@RussSharek",
    },
  },
  {
    name: "Ryn",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Ryn.png?v=1724010501927",
    imgAlt:
      "In the forefront is a tan anthropomorphic cocker spaniel dog face, their teeth bared in a toothy grin. The dog has a gauge in their ear, as well as another ear stud piercing, a nose piercing, dark blue hair, three white spots in their right cheek fur, and a white diamond on their forehead fur. In the background is the non binary flag in four vertical descending stripes: yellow, white, purple, black.",
    blurb: "<p>A Posca painting on canvas</p>",
    socials: {
      website: "https://rynufe.carrd.co",
      fedi: "https://meemu.org/@Ryntastic",
    },
  },
  {
    name: "swanchime",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/swanchime.jpg?v=1723991585492",
    imgAlt:
      "a pale Vietnamese person with circular glasses, two nostril piercings, and many ear piercings in a rose print shirt",
    blurb: "<p>a small dreamlike original watercolor painting</p>",
    socials: {
      website: "https://swanchime.com",
      fedi: "https://comicscamp.club/@swanchime",
    },
  },
  {
    name: "Sylvan (Daphne) Mir",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Sylvan-Daphne-Mir.jpg?v=1723732630227",
    imgAlt:
      "white person with blue hair with side shaves and dark dark blue eyes wears a black KN95 mask outside of a glass building",
    blurb:
      "<p>Sylvan makes art inspired by vibrant choices in light and color. Trained as a lighting designer, fae uses faer knowledge of light to create unusual, multi-disciplinary artworks including ink illustrations of nature and wildlife, creative photography, and small ceramics.</p>",
    socials: {
      website: "https://daphnemir.com",
      fedi: "https://kind.social/@moss",
    },
  },
  {
    name: "Teresa Knezek",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Teresa-Knezek.jpg?v=1723604262888",
    imgAlt:
      "A woman, wearing chunky clear eyeglasses and a dark knit hat, peeks over the top of a print of a raven perched in a winter birch forest.",
    blurb: "<p>A phoenix rising from trans pride flag-colored flames.</p>",
    socials: {
      website: "https://knezek.art",
      fedi: "https://mivox.net/@mivox",
      insta: "https://instagram.com/knezek.art",
      fb: "https://facebook.com/knezek.art",
    },
  },
  {
    name: "Vee Friday",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Vee-Friday.jpg?v=1724087349593",
    imgAlt:
      "A head and shoulders photo of a middle-aged white person, looking to one side. They are wearing glasses and  have the sides of their head shaved. There is a bone anchored hearing aid visible attached to their head.",
    blurb:
      "<p>Hi, I'm Vee. I am a disabled trans non-binary person who loves art in all its forms. I enjoy making what I call #BadArt by which is how I give my self permission to make art, any art, just because I like it.</p><p>It doesn't have to be 'good' or 'real art' , it just needs to something that gives me joy to make. The fact that other people enjoy it too makes me happy, but that's a bonus, if you see what I mean.</p>",
    socials: {
      fedi: "https://rage.love/@hag",
    },
  },
  {
    name: "Wetdryvac",
    imgSrc:
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/Wetdryvac.png?v=1723559001060",
    imgAlt:
      "A telegraph pole with two-tone orange stripes separated by the wires.",
    blurb:
      "<p>Transtract - 0023 - O-Sa: An abstract from the Transtract series, folding assigned and self identities.</p>",
    socials: {
      website: "https://www.wetdryvac.net",
      fedi: "https://mastodon.art/@wetdryvac",
      bsky: "https://bsky.app/profile/wetdryvac.bsky.social",
    },
  },
];

function makeSocial(socialType, socialLink) {
  let iconHTML;
  switch (socialType) {
    case WEBSITE:
      iconHTML = '<i aria-hidden="true" class="fa-solid fa-house-user"></i>';
      break;
    case FEDI:
      iconHTML = '<i aria-hidden="true" class="fa-brands fa-mastodon"></i>';
      break;
    case BSKY:
      iconHTML = '<i aria-hidden="true" class="fa-brands fa-bluesky"></i>';
      break;
    case THREADS:
      iconHTML = '<i aria-hidden="true" class="fa-brands fa-threads"></i>';
      break;
    case INSTA:
      iconHTML = '<i aria-hidden="true" class="fa-brands fa-instagram"></i>';
      break;
    case FB:
      iconHTML = '<i aria-hidden="true" class="fa-brands fa-facebook"></i>';
      break;
    default:
      return;
  }

  let social = document.createElement("div");
  social.className = "social";

  let link = document.createElement("a");
  link.href = socialLink;
  link.innerHTML = iconHTML;
  link.ariaLabel = socialType;
  social.appendChild(link);

  return social;
}

if (document.getElementById("test-social-grid")) {
  let socialDiv = document.getElementById("test-social-grid");
  for (const key in artists[0].socials) {
    socialDiv.appendChild(makeSocial(key, artists[0].socials[key]));
  }
}

function makeArtist({ name, imgSrc, imgAlt, blurb, socials }) {
  let artist = document.createElement("div");
  artist.className = "artist";

  let img = document.createElement("img");
  if (imgSrc && imgAlt) {
    img.src = imgSrc;
    img.alt = imgAlt;
  } else {
    img.src =
      "https://cdn.glitch.global/4c6d23ef-8570-4ac4-ade9-a8daff6f3f9a/no-image.jpg?v=1723815950068";
    img.alt = "a 'missing image' icon";
  }
  artist.appendChild(img);

  let details = document.createElement("details");

  let summary = document.createElement("summary");
  summary.textContent = name;
  details.appendChild(summary);

  details.insertAdjacentHTML("beforeend", blurb);

  let socialDiv = document.createElement("div");
  socialDiv.className = "social-grid";

  for (const key in socials) {
    socialDiv.appendChild(makeSocial(key, socials[key]));
  }

  details.appendChild(socialDiv);
  artist.appendChild(details);

  return artist;
}

let artistGrid = document.getElementById("artist-grid");

for (let i = 0; i < artists.length; i++) {
  artistGrid.appendChild(makeArtist(artists[i]));
}
