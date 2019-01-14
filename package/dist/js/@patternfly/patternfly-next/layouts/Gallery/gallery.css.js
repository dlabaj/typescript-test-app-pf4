const { StyleSheet } = require('@patternfly/react-styles');
module.exports = StyleSheet.parse(`.pf-l-gallery{--pf-l-gallery--m-gutter--GridGap:var(--pf-global--gutter);--pf-l-gallery--GridTemplateColumns:repeat(auto-fill, minmax(250px, 1fr));display:grid;grid-template-columns:var(--pf-l-gallery--GridTemplateColumns);}.pf-l-gallery.pf-m-gutter{grid-gap:var(--pf-l-gallery--m-gutter--GridGap);}`);
