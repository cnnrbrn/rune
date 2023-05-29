- [Semester Project 2 brief](#semester-project-2-brief)
  - [Goal](#goal)
  - [Brief](#brief)
  - [Requirements](#requirements)
  - [API](#api)
    - [Resources](#resources)
      - [Auction-auth](#auction-auth)
      - [Auction-profiles](#auction-profiles)
      - [Auction-listings](#auction-listings)
      - [User stories](#user-stories)
      - [Technical restrictions](#technical-restrictions)
      - [Required links](#required-links)
    - [Approved resources](#approved-resources)
      - [CSS processors](#css-processors)
      - [CSS frameworks](#css-frameworks)
      - [Hosting services](#hosting-services)
      - [Design applications](#design-applications)
      - [Planning applications](#planning-applications)
    - [Delivery](#delivery)
- [Experiences from the project work](#experiences-from-the-project-work)
  - [Experience by using Tailwind](#experience-by-using-tailwind)
    - [Benefits of tailwind](#benefits-of-tailwind)
      - [Faster development](#faster-development)
      - [No naming conflicts on large projects](#no-naming-conflicts-on-large-projects)
      - [Colocation](#colocation)
      - [Building a bridge between design and coding](#building-a-bridge-between-design-and-coding)
      - [Possibilities for tailoring](#possibilities-for-tailoring)
      - [Fewer code-lines of CSS to write](#fewer-code-lines-of-css-to-write)
      - [Safe refactoring](#safe-refactoring)
    - [Disadvantages of tailwind](#disadvantages-of-tailwind)
      - [Steep learning curve](#steep-learning-curve)
      - [Lack of web components](#lack-of-web-components)
      - [Risk of inconsistency](#risk-of-inconsistency)
      - [Markup gets hard to read](#markup-gets-hard-to-read)
    - [Conclusion - advantages and disadvantages](#conclusion---advantages-and-disadvantages)
  - [Configuration of Tailwind](#configuration-of-tailwind)
    - [npm init -y](#npm-init--y)
    - [npm install -D tailwindcss](#npm-install--d-tailwindcss)
    - [npx tailwindcss init](#npx-tailwindcss-init)
    - [create an input css-file](#create-an-input-css-file)
    - [npx tailwindcss -i ./css/input.css -o ./css/style.css --watch](#npx-tailwindcss--i-cssinputcss--o-cssstylecss---watch)
    - [npm run dev](#npm-run-dev)
    - [Link index.html to the output css-file](#link-indexhtml-to-the-output-css-file)
    - [Overriding styles from tailwind](#overriding-styles-from-tailwind)
    - [What is PostCSS?](#what-is-postcss)
  - [Experience by using JavaScript](#experience-by-using-javascript)
  - [Experience by using planning and design applications](#experience-by-using-planning-and-design-applications)

# Semester Project 2 brief

## Goal

To take the skills learned over the past three semesters and create an auction website.

## Brief

An auction site is looking to launch a website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings.

## Requirements

All API functionality is managed by an existing application. This project only covers the front-end application for the API.

## API

### Resources

The API you are using for this project can be found under Auction EndPoints in the Noroff API documentation.

####  Auction-auth

Post:  /api/v1/auction/auth/register

This endpoint will register a new user profile.

---
Post: /api/v1/auction/auth/login

You can use this endpoint to login with your registered user.

---

#### Auction-profiles

Get: /api/v1/auction/profiles

This endpoint returns a list of all registered profiles.

---

Get: /api/v1/auction/profiles/{name}

This endpoint returns a single registered profile.

---

Put: /api/v1/auction/profiles/{name}/media

This endpoint allows for profile avatar images to be set or changed.

---

Get: /api/v1/auction/profiles/{name}/listings

This endpoint returns all listings created by profile.

---

Get: /api/v1/auction/profiles/{name}/bids

This endpoint returns all bids made by profile.

---

Get: /api/v1/auction/profiles/{name}/credits

---

#### Auction-listings

Get: /api/v1/auction/listings

This endpoint returns all listings in an array.

---

Post: /api/v1/auction/listings

This endpoint allows for the creation of a new listing.

---

Get: /api/v1/auction/listings/{id}

This endpoint returns a single listing.

---

Put: /api/v1/auction/listings/{id}

This endpoint allows for the updating of a listing.

---

Delete: /api/v1/auction/listings/{id}

This endpoint deletes an entry based on its id and returns nothing.

---

Post: /api/v1/auction/listings/{id}/bids

This endpoint allows for the creation of a new bid on a listing.

---

#### User stories

The client has specified the following requirements in the form of User Stories:

1. A user with a stud.noroff.no email may register
2. A registered user may login
3. A registered user may logout
4. A registered user may update their avatar
5. A registered user may view their total credit
6. A registered user may create a Listing with a title, deadline date, media gallery and description
7. A registered user may add a Bid to another user’s Listing
8. A registered user may view Bids made on a Listing
9. An unregistered user may search through Listings

#### Technical restrictions

The company CTO has set the following technical restrictions:

1. Must use an approved CSS Framework
2. Must be hosted on an approved Static Host
3. Must use an approved Design Application
4. Must use an approved Planning Application

#### Required links

The Product Owner has requested links to the following:

1. A Gantt chart for project timing
2. A design prototype
3. A style guide
4. A kanban project board
5. A repository link
6. A hosted application demo link

### Approved resources

This list covers libraries and services that have been vetted by the company and approved for use.

#### CSS processors

* SASS/SCSS
* PostCSS

#### CSS frameworks

* Bootstrap (version >5.0.1)
* Tailwind (version >3.0.0)
* MUI (version >5.11.8)

#### Hosting services

* GitHub Pages
* Netlify

#### Design applications

* Adobe XD
* Figma
* Sketch

#### Planning applications

* Trello
* GitHub Projects

### Delivery

Include the required links in the Moodle delivery window using this template format.

* Gantt Chart
* Design Prototype
* Style Guide
* Kanban Board
* Repository
* Hosted Demo

All final changes must be merged into the default branch main or master. Other branches will not be checked.

Ensure that the readme.md file describes your project thoroughly, including how to setup and run the project locally and any special instructions for testers.

# Experiences from the project work

## Experience by using Tailwind

Much of the work on this project has gone into getting to know Tailwind as a framework for CSS.
This has probably happened at the expense of immersing myself in the JavaSrcipt programming necessary to use the API.

### Benefits of tailwind

#### Faster development

Tailwind helps you develop faster because you don’t have to think about the class names that make sense and add styling as per the design.

#### No naming conflicts on large projects

When you work on large projects with a team of more than 20-25 developers, naming becomes very important. With Tailwind, you can move from project to project and not have the difficulty of not knowing what class names should be used. Naming classes is a tough task considering it should make sense to other developers as well.

#### Colocation

You can infer your style just by reading markup. You can easily look at an element and see its style instead of looking at that element’s class name and finding the CSS to which the class name belongs.

#### Building a bridge between design and coding

Tailwind makes writing code feel like I´m using a design tool. When it comes to styling HTML, Tailwind CSS is a fast framework to use when you learn to use it. Styling elements directly make it simple to develop attractive layouts. It is achievable because Tailwind provides hundreds of built-in classes that eliminate the need to start from scratch when creating designs.

#### Possibilities for tailoring

It is said that Tailwind offers more freedom to create designs than Bootstrap.

#### Fewer code-lines of CSS to write

We don’t have to write CSS to style our elements. Instead we can use CSS utility classes generated by Tailwind CSS to style our elements. By using tailwind, you can cut down own-written lines of css-code with 90%.

#### Safe refactoring

As the classes are set at the element level, Tailwind solves the problem of updating or refactoring code. Refactoring global CSS is a pretty tough task as it eventually leads to creating new classes for everything.

### Disadvantages of tailwind

There may be some disadvantages of Tailwind:

#### Steep learning curve

Tailwind relies on a large set of utility classes. It takes time to get to know them all. While working with CSS, web developers have only one task- assign a proper class name to elements and add CSS to them. But if you are new to Tailwind, you will have to go through docs for every little styling to know what class name needs to be applied for your desired output.

#### Lack of web components

There is a limited number of pre-composed components. Tailwind doesn’t provide components by default like Bootstrap or Material UI, so you have to create the components from scratch, which is time-consuming.

#### Risk of inconsistency

Greater freedom in design also creates a greater risk of inconsistent design.

#### Markup gets hard to read

Components that require lots of styling will have a long list of classes, which make the markup look ugly that can get extremely hard to read.

### Conclusion - advantages and disadvantages

With its utility-first classes, default mobile-first approach, and optimisation capabilities, Tailwind is becoming one of the most popular CSS frameworks. And with Tailwind, you can create mobile-first responsive web applications without any need to write custom CSS.

Speaking for myself, my experiences after using tailwind in this project are good.

## Configuration of Tailwind

### npm init -y

When you start a new project i VS Code, open the CLI terminal and write:

npm init -y

This will create the file "package.json".

---

### npm install -D tailwindcss

npm install -D tailwindcss

The folder "node_module" will now be created in the project.

In the "package.json" file, you will see the dependencies.

---

### npx tailwindcss init

npx tailwindcss init

This command will create the file "tailwind.config.js".

In the content part of this file, you write where tailwind can find your html-files and css-files.

---

### create an input css-file

Create the file "input.css" somewhere in the project.
Paste the following 3 code lines at the top in this file:

@tailwind base;
@tailwind components;
@tailwind utilities;

---

### npx tailwindcss -i ./css/input.css -o ./css/style.css --watch

npx tailwindcss -i ./css/input.css -o ./css/style.css --watch

-i tells tailwind where to find the input.css file.

-o tells tailwind where to place the output css-file. In this project the input and output files are place in the same css-folder. The output file is calles "style.css".

--watch tells tailwind to immediately incorporate any change in the input.css file to the output style.css file. In this way you will not have to run this command frequently.

---

### npm run dev

The command above can be simplified by entering under the scripts section of the "package.json" file:

"dev": "npx tailwindcss -i ./css/input.css -o ./css/style.css --watch"

Then from the terminal you can write:
npm run dev;

---

### Link index.html to the output css-file

In index.html you have to link to the output css-file in the head section of the html-file.

<link href="./css/style.css" rel="stylesheet" />

---

### Overriding styles from tailwind

If you want to add your own css-code to the project, you write it in the input.css file just below the @tailwind.utilities.

CSS-code written here will override tailwindcss written as a result of using utilities classes.

This css-code will immediately be copied to the output file and make an immediate effect in the html-files.

---

### What is PostCSS?

PostCSS is a tool designed in Javascript that allows you to read a CSS file written with a different syntax and then convert it into real CSS

---
## Experience by using JavaScript
Not exactly a good experience, I would say.
This project may well end in a recit.
Well, I don't care.
I will complete the project after the deadline regardless of whether it is a recit or not.
But I'm not going to take any recit.

Because I am very skeptical of the whole scheme with such a big difference in difficulty between what is offered on the course and these relatively larger projects.

Just so it's said - I only care about learning, not about the diploma.

So I may not be doing any recit.

I aim to follow the education to the end at Noroff, and if that is incompatible with not taking recits, I will end the course and focus on education with other course providers.

## Experience by using planning and design applications

The programming technical challenges have completely overshadowed design and planning.

I am also not happy that all these programs cost money. I think the course is expensive enough as it is.

The usecases do not provide much help in creating a design. You just have to try and fail on your own. It can be useful to some extent. But if there is too much of that sort of thing, it works against its purpose.

Fortunately, Tailwind has been of great help because it has a philosophy that you can shape the design directly with the classes in Tailwind.