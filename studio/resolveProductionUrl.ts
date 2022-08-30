export default function resolveProductionUrl(document) {
  return `https://kansei-sanity-capri-react.netlify.app/preview?slug=${document.slug.current}`;
}
