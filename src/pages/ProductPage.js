import React from "react";
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const description = [
  "The genus name is derived from the Greek γέρανος (géranos) or γερανός (geranós) ‘crane’. The English name ‘cranesbill’ derives from the appearance of the fruit capsule of some of the species. Species in the genus Geranium have a distinctive mechanism for seed dispersal. This consists of a beak-like column which springs open when ripe and casts the seeds some distance. The fruit capsule consists of five cells, each containing one seed, joined to a column produced from the centre of the old flower. The common name ‘cranesbill’ comes from the shape of the unsprung column, which in some species is long and looks like the bill of a crane. However, many species in this genus do not have a long beak-like column.",
  "The rose hip, usually from R. canina, is used as a minor source of vitamin C. The fruits of many species have significant levels of vitamins and have been used as a food supplement. Many roses have been used in herbal and folk medicines. Rosa chinensis has long been used in Chinese traditional medicine. This and other species have been used for stomach problems, and are being investigated for controlling cancer growth. In pre-modern medicine, diarrhodon (Gr διάρροδον, 'compound of roses', from ῥόδων, 'of roses') is a name given to various compounds in which red roses are an ingredient.",
  `The word tulip, first mentioned in western Europe in or around 1554 and seemingly derived from the "Turkish Letters" of diplomat Ogier Ghiselin de Busbecq, first appeared in English as tulipa or tulipant, entering the language by way of French: tulipe and its obsolete form tulipan or by way of Modern Latin tulipa, from Ottoman Turkish tülbend ("muslin" or "gauze"), and may be ultimately derived from the Persian: دلبند‎ delband ("Turban"), this name being applied because of a perceived resemblance of the shape of a tulip flower to that of a turban. This may have been due to a translation error in early times when it was fashionable in the Ottoman Empire to wear tulips on turbans. The translator possibly confused the flower for the turban.`,
  `Many related plants also share the name "daisy", so to distinguish this species from other daisies it is sometimes qualified as common daisy, lawn daisy or English daisy. Historically, it has also been commonly known as bruisewort and occasionally woundwort (although the common name woundwort is now more closely associated with Stachys). Bellis perennis is native to western, central and northern Europe, but widely naturalised in most temperate regions including the Americas and Australasia.`
];
const images = [i1, i2, i3, i4];
const ProductPage = ({ match }) => {
  const info = description.map(item => <p>{item}</p>);

  if (match.params.id === "Geranium") {
    return (
      <div className="productinfo">
        <h2>Product</h2>
        <Product id={match.params.id} />
        <p>{description[0]}</p>
        <div className="logo">
          <img
            className="img__logo"
            src={images[0]}
            alt=""
            width="100"
            height="50"
          />
        </div>
        <Link to="/products">Come back to Product list</Link>
      </div>
    );
  } else if (match.params.id === "Rose") {
    return (
      <div className="productinfo">
        <h2>Product</h2>
        <Product id={match.params.id} />
        <p>{description[1]}</p>
        <div className="logo">
          <img
            className="img__logo"
            src={images[1]}
            alt=""
            width="100"
            height="50"
          />
        </div>
        <Link to="/products">Come back to Product list</Link>
      </div>
    );
  } else if (match.params.id === "Tulip") {
    return (
      <div className="productinfo">
        <h2>Product</h2>
        <Product id={match.params.id} />
        <p>{description[2]}</p>
        <div className="logo">
          <img
            className="img__logo"
            src={images[2]}
            alt=""
            width="100"
            height="50"
          />
        </div>
        <Link to="/products">Come back to Product list</Link>
      </div>
    );
  } else if (match.params.id === "Daisy") {
    return (
      <div className="productinfo">
        <h2>Product</h2>
        <Product id={match.params.id} />
        <p>{description[3]}</p>
        <div className="logo">
          <img
            className="img__logo"
            src={images[3]}
            alt=""
            width="100"
            height="50"
          />
        </div>
        <Link to="/products">Come back to Product list</Link>
      </div>
    );
  } else {
    return (
      <div className="productinfo">
        <h2>Product</h2>
        <Product id={match.params.id} name={info} />
        <article></article>
        <Link to="/products">Come back to Product list</Link>
      </div>
    );
  }
};

export default ProductPage;
