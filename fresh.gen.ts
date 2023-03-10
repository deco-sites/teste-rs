// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/LiveControls.tsx";
import * as $$$0 from "./sections/About.tsx";
import * as $$$1 from "./sections/Blog.tsx";
import * as $$$2 from "./sections/Contact.tsx";
import * as $$$3 from "./sections/Footer.tsx";
import * as $$$4 from "./sections/Head.tsx";
import * as $$$5 from "./sections/Header.tsx";
import * as $$$6 from "./sections/Intro.tsx";
import * as $$$7 from "./sections/Markdown.tsx";
import * as $$$8 from "./sections/QuillText.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: { "./islands/LiveControls.tsx": $$0 },
  sections: {
    "./sections/About.tsx": $$$0,
    "./sections/Blog.tsx": $$$1,
    "./sections/Contact.tsx": $$$2,
    "./sections/Footer.tsx": $$$3,
    "./sections/Head.tsx": $$$4,
    "./sections/Header.tsx": $$$5,
    "./sections/Intro.tsx": $$$6,
    "./sections/Markdown.tsx": $$$7,
    "./sections/QuillText.tsx": $$$8,
  },
  functions: { "./functions/LoadGitHubRaw.ts": $$$$0 },
  schemas: {
    "./sections/About.tsx": {
      "inputSchema": {
        "title": " About",
        "type": "object",
        "properties": {},
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Blog.tsx": {
      "inputSchema": {
        "title": " Blog",
        "type": "object",
        "properties": {
          "posts": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "img": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Img",
                },
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "text": {
                  "type": "string",
                  "title": "Text",
                },
              },
              "required": [
                "img",
                "title",
                "text",
              ],
            },
            "title": "Posts",
          },
        },
        "required": [
          "posts",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Contact.tsx": {
      "inputSchema": {
        "title": " Contact",
        "type": "object",
        "properties": {},
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": {
        "title": " Footer",
        "type": "object",
        "properties": {},
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "styleUrls",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "logo": {
            "format": "image-uri",
            "type": "string",
            "title": "Logo",
          },
        },
        "required": [
          "title",
          "logo",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Intro.tsx": {
      "inputSchema": {
        "title": " Intro",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "banner": {
            "format": "image-uri",
            "type": "string",
            "title": "Banner",
          },
        },
        "required": [
          "title",
          "description",
          "banner",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Markdown.tsx": {
      "inputSchema": {
        "title": " Markdown",
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "title": "Text",
          },
        },
        "required": [
          "text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/QuillText.tsx": {
      "inputSchema": {
        "title": " Quill Text",
        "type": "object",
        "properties": {
          "html": {
            "format": "html",
            "type": "string",
            "title": "Html",
          },
        },
        "required": [
          "html",
        ],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live ??? this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
