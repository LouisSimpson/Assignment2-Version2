## MotoGP Website

By Reuben Porter P15221160


### Module Information

CTEC3905 Frontend Development

---
## Contents:

1. Choice of website
2. Wireframe sketches & initial design
3. Mobile first responsive design
4. HTML5 semantic elements
5. Advanced CSS3 styling
6. JavaScript usage
7. API & JSON
8. Evidence of user testing
9. Website usability
10. Validation
11. The use of GitHub
12. Personal development

*References can be found throughout this document*

---
## 1. Choice of website

### Initial website 

Initally I started to work on a website which would be a home for a local boxing club. After working on it for a few weeks I didn't like the way it was going and knew I could produce better. I therefore decided to start fresh and make a new website.

The link to my original website can be found below: 

GitHub pages: https://reubenporter.github.io/Assignment2/

GitHub repo: https://github.com/ReubenPorter/Assignment2 

### New & current website (This repo)

For my new website I decided to base it on something I am interested in - **MotoGP**. After gathering some ideas from the official MotoGP and similarly related websites I made a start. 

---
## 2. Wireframe sketches

The following sketches are intial designs of the index page and general layout of my website.

#### Mobile view

<img src="https://i.imgur.com/5cGlozj.jpg" width="500px" alt="mobile">

#### Tablet view

<img src="https://i.imgur.com/fcOreVE.jpg" width="500px" alt="tablet">

#### Desktop view

<img src="https://i.imgur.com/8m8pCnH.jpg" width="500px" alt="desktop">

resources used: https://designshack.net/articles/layouts/10-rock-solid-website-layout-examples/ 

---
## 3. Mobile first responsive design

### Assignment brief

It was made clear in the assignment breif that my website had to be fully responsive and built mobile first.

### Media queries

I used the following media queries for my responsive breakpoints:

```css
/*STYLING FOR TABLETS*/
@media only screen and (min-width: 620px){

}

/*STYLING FOR DESKTOPS & LAPTOPS*/
@media only screen and (min-width: 1024px){

}
```
Reason for choice: https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/  

---
## 4. HTML5 semantic elements

Before this module I had gotten into a habit of using ```<Div>``` more often than maybe I should have. In this module we were taught how to make correct use of HTML5 semantic elements and how to layout a html page the correct way.

An example of this can be found below:

```html
<section>
    <h2>Section Title</h2>
    <article>
        <h3>Article Title</h3>
        <p>Some text here</p>
    </article>
    <article>
        <h3>Article Title</h3>
        <p>Some text here</p>
    </article>
</section>
```
Resources used: https://www.w3schools.com/html/html5_semantic_elements.asp 

---
## 5. Advanced CSS3 styling

### Animations & Transitions

Some examples within my website:

- Home page title **fly in**
- Flipper card (content on both side, card **flips** on hover)
- **Scale size** of social media icons on hover
- Figure description **appear** on hover
- **Change** social media icon to colour on hover
- **Fadein Fadeout** image for the gallery slider

### Flexbox

I have used as much *flexbox* as possible during the creation of my website. I have used both the basic flex commands as well as some more advanced. Through using *flexbox* I was able to layout my content easily as well as making the website fully responsive.

Examples of flex used:

```css
.flex-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
```

Resources used: 
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
- https://codepen.io/reidark/pen/FEueH?limit=all&page=3&q=modal
- https://www.w3schools.com/howto/howto_css_modal_images.asp
- https://davidwalsh.name/css-flip


---
## 6. JavaScript usage

I have tried to include as much raw JavaScript as possible based on what we were taught in lectures & labs. 

### This includes:
- Navigation menu that opens from a *hamburger* icon for mobile & tablet view
- Back to top button
- Modal box on the gallery page & close button
- Gallery image slideshow

### jQuery

I have used a minimal amount of jQuery for a script that closes the nav menu once opened.

Resources used:
- https://www.w3schools.com/howto/howto_css_modals.asp
- https://www.w3schools.com/howto/howto_js_lightbox.asp

---
## 7. API & JSON

I found introducing an API into my website rather challenging but also very rewarding. 

### API's used:
- Twitter live feed
- The Guardian search (edited script so it returns a set API query and displayed a thumbnail of the article)
- Flickr image search (edited script to return fewer results)

### Attempted but not implemented:
- Ticketmaster (managed to return the JSON data but failed to display it on the webpage)

### Tools used

I used the Google Chrome extension, **JSON formatter** to make the raw JSON data easier to read. Evidence of this being used can be found in the screenshots below.

#### JSON formatter extension

<img src="https://i.imgur.com/z9VKjeS.png" width="500px" alt="JSON formatter">

#### Raw JSON data

<img src="https://i.imgur.com/wfqp9nq.png" width="500px" alt="Raw JSON">

#### Parsed JSON data

<img src="https://i.imgur.com/8FmXe4u.png" width="500px" alt="beautified JSON">

Resources used: 

- https://jsonformatter.curiousconcept.com/
- http://open-platform.theguardian.com/
- https://developer.ticketmaster.com/

---
## 8. Evidence of user testing

Once my website was complete I sent the link of the github pages to my friends studying the same module asking them to visit my website, and give me some feedback. All of the feedback recieved was positive and there were no negative comments. 

I decided that I wanted to test my website with someone who didn't have any knowledge with how websites work etc. as I believed this would achieve the most honest and reliable feedback - the perfect test subject was my girlfriend.

Evidence can be found below:

<img src="https://i.imgur.com/OmRCvi6.jpg" width="500px" alt="user testing">

---
## 9. Website usability

### Intelligent application of Information Architecture and PARC

I have applied information architecture and PARC as we were taught by Dave & Fania during lectures and labs.

Resources used: http://www.uxbooth.com/articles/complete-beginners-guide-to-information-architecture/

### Awareness of accessibility principles

I understand the problems of accessibility and realise the importance of it. From this understanding I have tried to make my website as easy to use for my intended audience as possible.

### Effective navigation at all sizes, content easy to locate

- Navigation is a *side menu* which is opened from a *hamburger* icon for **mobile** & **tablet** views - this is the most common method used nowadays for navigation on these devices.
- Navigation is a standard *horizontal navigation bar* located at the top of the webpage for **laptop** & **desktop** views.
- All content is displayed in a sensible, professional layout making it easy to locate.

### Sitemap

I have included a sitemap in the footer of my website for ease of navigation as shown in the screenshot below:

<img src="https://i.imgur.com/TCFGnwl.png" width="800px" alt="sitemap">

---
## 10. Validation

### HTML Validator

I used the https://validator.w3.org/ validator. I regularly ran my pages through the validator to fix any errors that may have appeared. It's important to find and fix errors early on, rather than building a full website and having to fix a large amount of errors at the end.

The screenshots below show evidence of using the validator:

#### With Errors

This was the worse page with a total of 43 errors. (I had obviously forgot to check this page during development)

<img src="https://i.imgur.com/Z8QsTFP.png" width="600px" alt="with errors">

#### Fixed Errors

<img src="https://i.imgur.com/pkZ4Agp.png" width="500px" alt="without errors">

#### Warnings

After I had made all possible changes some warnings were still displayed. These were mainly due to a ```<h1><h2><h3><h4>``` required at the start of an article or section. In these particular cases a heading wasn't required therefore I did not add one, resulting in a warning.  

### Console Errors

Due to the use of various JavaScript ```<script>``` I had to ensure there were no errors being displayed in the console. If there were any errors I made ammendments to the ```<script>``` to fix and remove them.

The screenshot below shows the gallery page with an active ```<script>```. As you can see there are no errors being displayed in the console.

<img src="https://i.imgur.com/6yVFf7N.png" width="500px" alt="error console">

Resources used: https://validator.w3.org/

---
## 11. The use of GitHub

### Previous knowledge

I was already familiar with the use of Github and GitBash from a previous module. This was a huge help for me as I was able to get my website working with GitHub from the start of the assignment.

### Commit history

#### First website

<img src="https://i.imgur.com/SYfcSkC.png" width="500px" alt="website1">

#### Current website

<img src="https://i.imgur.com/6stGQ4s.png" width="500px" alt="website2">

### Using branches

I used branches for when I wanted to experiement with my website without affecting the master version. Once I had fixed any errors from the changes made within that branch, I merged it to the master and deleted it.

The screenshot below displays the branch named *Safari* (I was testing browsing compatibility). It then shows the successful merge to the master branch and finally the branch having been deleted.

<img src="https://i.imgur.com/hOvzsHz.png" width="600px" alt="branchgithub">

Resources used: https://guides.github.com/activities/hello-world/

---
## 12. Personal Development

I have learnt a lot during this module and I'm happy to say that I will be able to take this knowledge and build on it. Below is a brief list of what I believe I have gained knowledge on.

- JavaScript
- API & JSON
- Advanced CSS3 - e.g. Flexbox, Animations, Transitions
- Writing in Markdown
- Correct use of HTML5 semantic elements
- More experience with GitHub
- The use of emmit

An example of me using emmit can be found below:

#### This
<img src="https://i.imgur.com/DtnhtxI.png" height="200px" alt="branchgithub">

#### Becomes

<img src="https://i.imgur.com/9TJAAti.png" height="200px" alt="branchgithub">

---
