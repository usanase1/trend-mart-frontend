// FontAwesome icon library setup for the project
// You can import and add icons to the library here

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShoppingCart, faHeart, faSearch, faCreditCard, faDollarSign, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube, faPaypal, faAmazonPay } from '@fortawesome/free-brands-svg-icons';


library.add(
  faUser,
  faShoppingCart,
  faHeart,
  faSearch,
  faCreditCard,
  faDollarSign,
  faMobileAlt,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPaypal,
  faAmazonPay
);

// Export FontAwesomeIcon for use in components
export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
