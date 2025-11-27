/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 This file is auto-generated from docs/SUMMARY.md
 Run 'node generate-sidebar.js' to regenerate
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
  {
    "type": "doc",
    "id": "README",
    "label": "Introduction"
  },
  {
    "type": "doc",
    "id": "concepts/README",
    "label": "Concepts"
  },
  {
    "type": "doc",
    "id": "concepts/motivation",
    "label": "Motivation"
  },
  {
    "type": "doc",
    "id": "concepts/clusters-and-federations",
    "label": "Clusters & Federations"
  },
  {
    "type": "doc",
    "id": "concepts/applications",
    "label": "Applications"
  },
  {
    "type": "doc",
    "id": "concepts/vsql",
    "label": "VSQL"
  },
  {
    "type": "doc",
    "id": "concepts/evend-sourcing-and-cqrs",
    "label": "Evend Sourcing & CQRS"
  },
  {
    "type": "doc",
    "id": "concepts/editions",
    "label": "Editions"
  },
  {
    "type": "doc",
    "id": "concepts/services",
    "label": "Services"
  },
  {
    "type": "doc",
    "id": "concepts/notation",
    "label": "Notation"
  },
  {
    "type": "category",
    "label": "Getting Started",
    "items": [
      {
        "type": "doc",
        "id": "getting-started/install-voedger-ce",
        "label": "Install Voedger CE"
      },
      {
        "type": "doc",
        "id": "getting-started/install-voedger-se",
        "label": "Install Voedger SE"
      }
    ],
    "collapsible": false,
    "className": "sidebar-section-header"
  }
],
};

module.exports = sidebars;
