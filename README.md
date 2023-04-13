# Project Name: Material UI and Next.js 13

This project is built using Material UI and Next.js 13 as a starter.

## Overview

NextJs 13 is being used in this project exposing important new features like the `app/` directory which improves the usability of server side pages making logic be more easy to be done without using extra functionalities like `getServerSideProps()` & `getStaticProps()`. It renders all pages by default in server side unless the page is opted in client side using `'use client'`. NextJs Also provides out of the box functions that can be invoked to replace the meta-tags `generateMetaTags()`.

Here are some points that have been handled inside the project:

- **Wrapping Material UI Components**: Components like *AppBar* and *Typography* by material ui  has been wrapped with custom components like *CustomTypography* and *ResponsiveAppBar* to be able to decouple material ui from our project.

- **Data**: Currently all data resides in the public (accessible) directory of the project for speed of development, otherwise we can host a database like MongoDB or SQlite and write down the layers of communication.

- **SEO**: Meta-tags are being generated dependant on the type of page and what content it holds importantly to support search engine optimization. For example *Shop* and *Blog* pages are important to have the meta-tags generated.

- **Sitemap**: To support more reachability to the website's content we can also add a crone job in the backend to create our sitemap file so it can be reachable by google bots. here's a sample to do so

```javascript
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Array of objects representing the pages on the website
const pages = [
  { url: '/', lastmod: new Date(), changefreq: 'daily', priority: 1 },
  { url: '/about', lastmod: new Date('2022-03-01'), changefreq: 'monthly', priority: 0.8 },
  { url: '/shop', lastmod: new Date('2022-03-15'), changefreq: 'monthly', priority: 0.8 }
];

// Define the cron job to run daily at midnight
cron.schedule('0 0 * * *', async () => {
  try {
    // Create a new SitemapStream object
    const stream = new SitemapStream({ hostname: 'http://localhost:3000' });

    // Add each page to the sitemap
    pages.forEach(page => {
      stream.write(page);
    });

    // End the sitemap stream
    stream.end();

    // Convert the sitemap stream to a string
    const sitemap = await streamToPromise(stream).then(sm => sm.toString());

    // Save the sitemap to a file in the root directory
    fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);

    console.log('Sitemap generated successfully!');

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
});

```

## Getting Started

To get started with this project, you will need to have Node.js and NPM installed on your system. Once you have installed these dependencies, you can clone the repository and run the following commands:

`npm install & npm run dev`

This will start the development server and you should be able to access the application at `http://localhost:3000`.

## Todo List

Here are some of the features that we plan to add to this application:

- [ ] User authentication
- [ ] Convert to typescript
- [ ] Add a backend API
- [ ] Add support for internationalization
- [ ] Improve accessibility
- [ ] Implement automated testing
- [ ] Modularize Image component with skeleton placeholder
- [ ] Add not found for each leaf pages
- [ ] Revisit the recipes folder structure to support catch-all segments for categories
