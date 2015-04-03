
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["specification.html#the-cite-collection-services-protocol-version-01"] = "The CITE Collection Services protocol, version 0.1";
index.add({
    url: "specification.html#the-cite-collection-services-protocol-version-01",
    title: "The CITE Collection Services protocol, version 0.1",
    body: "# The CITE Collection Services protocol, version 0.1 #   **Content**:  This document defines version 0.1 of the CITE Collection Services protocol.  **Editors**:  Christopher Blackwell and Neel Smith, Center for Hellenic Studies Technical Working Group leads.  **Date**:  April, 2015.  **License**:  This specification is available under the terms of the Creative Commons Attribution-ShareAlike 4.0 International License, &lt;http://creativecommons.org/licenses/by-sa/4.0/deed.en_US&gt;.    "
});

documentTitles["specification.html#content"] = "Content";
index.add({
    url: "specification.html#content",
    title: "Content",
    body: "## Content ##  TBA"
});


