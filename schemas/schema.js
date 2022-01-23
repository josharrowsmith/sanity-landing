// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import siteSettings from "./documents/siteSettings";
import hero from "./objects/hero";
import mainImage from "./objects/mainImage";
import simpleBlockContent from "./objects/simpleBlockContent";
import openGraph from "./objects/openGraph";
import imageGrid from "./objects/imageGrid";
import fullWidthImage from "./objects/fullWidthImage";
import stores from "./objects/stores";
import socials from "./objects/soicals";

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
    mainImage,
    simpleBlockContent,
    openGraph,
    imageGrid,
    fullWidthImage,
    stores,
    socials
  ]),
});
