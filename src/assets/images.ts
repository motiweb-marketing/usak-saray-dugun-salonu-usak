import heroImg from "./images/hero-wedding.jpg";
import aboutImg from "./images/about-salon.jpg";
import serviceWeddingImg from "./images/service-wedding.jpg";
import serviceHennaImg from "./images/service-henna.jpg";
import servicePartyImg from "./images/service-party.jpg";
import serviceCorporateImg from "./images/service-corporate.jpg";
import galleryInterior1Img from "./images/gallery-interior-1.jpg";
import galleryDecoration1Img from "./images/gallery-decoration-1.jpg";
import galleryHennaImg from "./images/gallery-henna.jpg";
import galleryExteriorImg from "./images/gallery-exterior.jpg";
import galleryInterior2Img from "./images/gallery-interior-2.jpg";
import galleryDecoration2Img from "./images/gallery-decoration-2.jpg";

/** Yerel şablon görselleri — dış CDN bağımlılığı yok */
export const templateImages = {
  hero: heroImg,
  about: aboutImg,
  services: {
    wedding: serviceWeddingImg,
    henna: serviceHennaImg,
    party: servicePartyImg,
    corporate: serviceCorporateImg,
  },
  gallery: {
    interior1: galleryInterior1Img,
    decoration1: galleryDecoration1Img,
    henna: galleryHennaImg,
    exterior: galleryExteriorImg,
    interior2: galleryInterior2Img,
    decoration2: galleryDecoration2Img,
  },
};
