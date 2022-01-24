// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import siteSettings from "./documents/siteSettings";
import hero from "./objects/hero";
import blockImage from "./objects/blockImage";
import blockContent from "./objects/blockContent";
import openGraph from "./objects/openGraph";
import imageGrid from "./objects/imageGrid";
import bottomBanner from "./objects/bottomBanner";
import cta from "./objects/cta";
import ctaPlug from "./objects/ctaPlug";
import socials from "./objects/socials";
import stores from "./objects/stores"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    page,
    siteSettings,
    hero,
    blockImage,
    blockContent,
    openGraph,
    imageGrid,
    bottomBanner,
    cta,
    ctaPlug,
    socials,
    stores
  ]),
});
