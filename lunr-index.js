
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

documentTitles["specification.html#cite-collection-services"] = "CITE Collection Services";
index.add({
    url: "specification.html#cite-collection-services",
    title: "CITE Collection Services",
    body: "## CITE Collection Services ##  The CITE Collection Services protocol (CITE Services, for short) defines interaction between a client and server providing identification of and retrieval of canonically cited objects in a set (or Collection).  "
});

documentTitles["specification.html#client-server-communication"] = "Client-server communication";
index.add({
    url: "specification.html#client-server-communication",
    title: "Client-server communication",
    body: "## Client-server communication  An instance of a CITE Services implementation is addressable by a Uniform Resource Locator (URL), referred to hereafter as a CITE Services \&quot;base URL\&quot;.  CITE Services requests are formed by adding request parameters, as specified below, directly to the base URL.  More formally, the concatenation of the base URL with URL parameters must produce a valid URL according to the requirements of the URL specification [IETF RFC 2396][rfc2396].  Replies are formatted in XML validating against the reply schemas identified below.    [rfc2396]: http://www.ietf.org/rfc/rfc2396.txt   "
});

documentTitles["specification.html#discussion-non-normative"] = "Discussion (non-normative)";
index.add({
    url: "specification.html#discussion-non-normative",
    title: "Discussion (non-normative)",
    body: "### Discussion (non-normative) ###  While all implementations of CITE Services to date have used HTTP as the transport protocol, this is not required by CITE Services.  It is conceivable, for example, that implementors might choose to implement CITE Services by exchanging requests and replies over a duplex protocol.  CITE Services does not specify what is returned from the base URL if no request parameters are supplied, but it is recommended that implementors return basic information identifying the service in plain text, markdown or XHTML format.  Note that the base URL could be a string like       http://myhost/cite?    because directly adding valid CTS request parameters as defined in this document results in a valid URL under RFC 2396, e.g., `http://myhost/cite?request=GetCapabilities` is  a valid URL.  Likewise,      http://myhost/cite?configuration=default&amp;  is a valid base URL because the request `http://myhost/mycts?configuration=default&amp;request=GetCapabilities` is a valid URL.    "
});

documentTitles["specification.html#request-parameters"] = "Request parameters";
index.add({
    url: "specification.html#request-parameters",
    title: "Request parameters",
    body: "## Request parameters ##  "
});

documentTitles["specification.html#common-requirements"] = "Common requirements";
index.add({
    url: "specification.html#common-requirements",
    title: "Common requirements",
    body: "### Common requirements ###   In a full CITE Services request URL, each parameter's name and value pair must be separated from any following parameters by an ampersand (\&quot;&amp;\&quot;, Unicode x0026); name and value for each individual parameter must be separated by an equals sign (\&quot;=\&quot;, Unicode x003D).  The characters \&quot;&amp;\&quot;,  \&quot;=\&quot;  and the solidus  (\&quot;/\&quot;, Unicode x002F) must not be used in the values of a CITE Services request parameter.  Parameter names and values are both case sensitive. Order of parameters in a request is not significant.   All CITE Services requests include a URL parameter named `request`. The value of this parameter must be the name of one the nine requests, `GetCapabilities`, `GetCollectionSize`,  `GetObject`, `GetFirst`, `GetLast`, `GetPrev`,  `GetPrev`    "
});

documentTitles["specification.html#getcapabilities"] = "GetCapabilities";
index.add({
    url: "specification.html#getcapabilities",
    title: "GetCapabilities",
    body: "### GetCapabilities ###   **Purpose**: The `GetCapabilities` request returns a reply that defines a set of Collections known to the server and identifies the properties shared by members of each set.  **Request syntax and semantics**:  No parameters other than the `request` parameter are required.    | Parameter |	Required/optional |	Description |   |  ------	| ------	| ------	|   |  request | required | the value `GetCapabilities` |     "
});

documentTitles["specification.html#to-be-specified-more-formally"] = "To be specified more formally...";
index.add({
    url: "specification.html#to-be-specified-more-formally",
    title: "To be specified more formally...",
    body: "## To be specified more formally...     2.  `GetCollectionSize`.  The request  returns the number of objects in the collection identified by the `urn` parameter. 3.   The request `GetObject` returns an XML description of the individual object identified by the `urn` parameter. 4.   `GetFirst` : returns the URN of the first object in an ordered collection 5.   `GetLast`: returns the URN of the last object in an ordered collection 6.   `GetPrev`: returns the XML description of the object preceding the submitted URN in an ordered collection.  It is an error if the collection is not ordered. 7.   `GetNext`: returns the the XML description of the object following the submitted URN in an ordered collection.  It is an error if the collection is not ordered. 8.   `GetPrevNextUrn`: returns the URNs of both the object preceding and the object following the submitted URN in an ordered collection.  If the submitted URN is the first URN in the collection, the previous URN value will be null;  if the submitted URN is the last URN in the collection, the next URN value will be null.  It is an error if the collection is not ordered. 9.   `GetObjectPlus`: returns a concatenation of the `GetObject` and `GetPrevNextUrn` requests.   If the collection is not ordered, the previous and next URN values will be null.  All requests other than `GetCapabilities` further require a parameter named `urn`.  The value of this parameter must be a valid CITE URN value, as defined in the [CITE URN specification][citeurn].  [citeurn]: http://cite-architecture.github.io/citeurn_spec/    "
});

documentTitles["specification.html#replies"] = "Replies";
index.add({
    url: "specification.html#replies",
    title: "Replies",
    body: "## Replies ##  "
});

documentTitles["specification.html#individual-replies"] = "Individual Replies";
index.add({
    url: "specification.html#individual-replies",
    title: "Individual Replies",
    body: "## Individual Replies ##   While the Relax NG schema for each request defines and can be used to enforce a number of the syntactic requirements of CITE Collection Services, there are further requirements that cannont be readily defined in a schema language.  These are specified for each request in the following sections.  "
});

documentTitles["specification.html#getcapabilities"] = "GetCapabilities";
index.add({
    url: "specification.html#getcapabilities",
    title: "GetCapabilities",
    body: "### GetCapabilities ###  The `collectionService` includes one or more `citeCollections`; it may optionally include CITE Extensions.   "
});

documentTitles["specification.html#extensions-optional"] = "Extensions (optional)";
index.add({
    url: "specification.html#extensions-optional",
    title: "Extensions (optional)",
    body: "#### Extensions (optional) ####  The optional `extensions` element has two parts:  one or more `rdfnamespace` elements, followed by one or more `extension` elements. An extension classifies an object as belonging to a particular type, identified by the extension's `rdfType` attribute.  The `rdfnamespace` element defines associations of abbreviations with full URIs.  Any abbreviation defined in this section may be used in the `rdfnamespace` attribute of an extension:  it is an error if an extension's `rdfnamespace` value uses an abbreviation not defined by an `rdfnamespace` element.  The `extension` element contains a list of one or more `request` elements.  The `name` attribute defines a request name supported by this extension.  The `extendedCitation` attribution of the `extension` element has a boolean value indicating whether, in addition to defining type-specific requests, the extension defines an extended citation scheme appended to objects references with the `@`  character.  The `abbr` and `uri` attributes define a mapping of abbreviation to full URI value.  The `abbr` value may be used to identify extensions applied to individual collections.   "
});

documentTitles["specification.html#cite-collections-required-content"] = "CITE Collections: required content";
index.add({
    url: "specification.html#cite-collections-required-content",
    title: "CITE Collections: required content",
    body: "#### CITE Collections: required content ####  Each `citeCollection` has three attributes.  The `urn` is the CITE URN identifier for the collection; the `canonicalId` and `label` attributes pair machine-actionable unique object  identifiers with human-readable labels.  The value of the `canonicalId` attribute must be the name of a property of type `citeurn`.  The value of the `label` property must be the name of a second property of any type, normally text.  The `namespaceMapping` elements defines the abbreviation for the naming authorities used in the collection's URN.     One or more `source` elements define data sources.  As of version 0.1, the only allowed value for the `type` attribute is `file`;  the meaning of the `value` attribute is undefined, but may be used to provide access to data in local or remote file systems.  At least two `citeProperty` elements define the collection's shared properties.  One property must be of type `citeurn`, and must be named in the Collection's `canonicalId` attribute;  at least one further property of any type must be included and named in the Collection's `label` attribute.    "
});

documentTitles["specification.html#cite-collections-optional-content"] = "CITE Collections: optional content";
index.add({
    url: "specification.html#cite-collections-optional-content",
    title: "CITE Collections: optional content",
    body: "#### CITE Collections: optional content ####   Collections may optionally include a list of **extensions** that apply to this collection. The extension is identified in the `abbr` attribute of the `extendedBy` element with a value defined in the CollectionService's  `extensions` section.  A `metadata` element allows inclusion of **Dublin Core** elements for title, creators, coverage, description and rights.  A collection is classified as an **ordered collection** (and therefore capable of responding to the requests applying specifically to ordering of objects) by the `orderedBy` element.  The value of its `property` attribute must be the name of a property in the collection's list with type `number`.        "
});

documentTitles["specification.html#reply-schemas"] = "Reply schemas";
index.add({
    url: "specification.html#reply-schemas",
    title: "Reply schemas",
    body: "### Reply schemas ###  The release version of this specification will be packaged together with Relax NG schemas for each reply.  The current drafts can be found in the `cite` library's github repository at &lt;https://github.com/cite-architecture/cite&gt;.   "
});

documentTitles["specification.html#links"] = "Links";
index.add({
    url: "specification.html#links",
    title: "Links",
    body: "## Links ##  "
});


