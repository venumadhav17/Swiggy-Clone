## Zomato Clone

## 1st Part:

## Steps To follow:

1. Create Parcel Bundler without using create-react-app dependency command.
2. Installed React, ReactDOM as dependencies without using CDN links.

## Note :

1. Use CDN Development links mostly when we use development sceneraio, apart from this we can use CDN production links too.

## CDN: (Content Delivery Network)

1. It is used to control how browser handles crossorigin requests for a particular resource such as <script>, <tag>.

2. Fetching the resources from different domains to localBrowsers that served/display on HTML Page.
3. Suitable for publicly accessible resources.
4. If we need credentials / resources like cookies, HTTP authentication from different domains we need to give crossorigin = "use-credentials" otherwise we use crossorigin="anonymous" or Instead just use crossorigin.

5. Use type="module" in html to work with react.

## Parcel Features:

1. Dev Build
2. Caching - Faster Builds
3. Optimization
4. Minification
5. HMR ( Hot Module Replacement) -> Refreshing webpage automatcally in output gives fast result
6. File watching algorithm -> Whenever we need to change title name we can change and ths algorithm is written in c++
7. Image Optimization
8. Bundling
9. Compress ( Remove all whitespaces from our code to deploy our code into production)
10. Differential Bundling -> when our website/app is hoisted, We can open our app in different web browser versions.
11. Diagnostcs -> Errors ( Parcel provide clean and readble errors)
12. Tree Shaking -> Remove Unused Code.
13. Same features are present in differnet dev and production bundlers.

## .gitignore

1. This is used to remove unwanted folders when we need to push into git repository because it contains large file size. When we want these large files we can install by using npm parcel index.html / npm install.

2. This command will fetch all dependenoies from package.json.

## Production Build:

## Command: npx parcel build index.html

1. When we use this command it converts all the code into single link here optimization/minification works behind the scenes.

2. All the code that we see in dist folder whatever we seen in output we are getting those output from dist and parcel-cache these two files will communicates with each other and it gives to the javascript engine and browser understands the code finally diaplsy output in webpage.

3. When we delete parcel-cache, dist folders we regenerate automatically using dev dependency or build dependency or normal dependency commands.

4. When we use Production Build Command it takes some time to get files and output as result.

## How to make our website /app compatable for all versions (older, newer versions)?

1. Use "browserslist": [
   "last 2 chrome version"
   ] in Package.json

2. It will work only in last 2 latest versions of chrome devices.

## 2nd Part, 3rd Part:

1. Add "start":"parcel index.html" in package.json scripts file to use command npm start / npm run start instead of using npx parcel index.html for executing the code.

2. Whenever we don't know which command we need to run to see output and which bundler they are using on project we can refer in package.json file there we come to know which command is using on their project.

3. We need to use npm start for running code and for production we need to use npm run build we can't use npm build because start is the keyword given by parcel in react.

## React Components

1. Class Based Components -> Older Way of Writing Components
2. Functional Components -> Newer Way of Writing Components

## Note : In Industry, Most of the Projects in now a days are using functional components.

## Create Components Using JSX

## Different Ways of writing Components

<<<<<<< HEAD
<<<<<<< HEAD
a) const Heading = () => (

# <h1>Hello World!</h1>

=======

> > > > > > > dc17f32a187fbcc3df58e001e1916d385974174b
> > > > > > > a) {/\* const Heading = () => (

    <h1>Hello World!</h1>

> > > > > > > dc17f32a187fbcc3df58e001e1916d385974174b
> > > > > > > )

b) const Heading = () => <h1>Hello World!</h1>

c) const Heading = () => {
<<<<<<< HEAD
return (

<h1>Hello World!</h1>
)
}
=======
    return (
        <h1>Hello World!</h1>
    )
} */}
<<<<<<< HEAD
>>>>>>> dc17f32a187fbcc3df58e001e1916d385974174b
=======
>>>>>>> dc17f32a187fbcc3df58e001e1916d385974174b

## What is JSX?

A.JSX is not an HTML Script Language It's like HTML like syntax (or) XML syntax.
-> It is not HTML in Javscript.
-> We write JSX Syntax for components for better understanding and for browsers to understand and display output in webpages.
-> We can use usestate, useEffect in JSX and whatever we write in JSX it can be converted into HTML Tags to understand by JS Runtime Engine and by Browsers.
-> JSX can remove malicious data(Cross-Side Scripting) and it can remove threats that are getting from apis.

## How Browsers Understand JSX to display Output?

A. Whatever we write code that can be converted into Javascript Object the converted code goes to JS run Engine and Browser will understand that code and renders the code, display Html tags in DOM and provdes output in webpage.

1. Browsers understand ECMA6 (ES6) in JavaScript. It's a pure JavaScript Language.

2. JSX(code) -> Babel Converting Code -> JS Object(like React.createElement) -> JS Engine -> HTML Element(Browser Understands Code)

3. There is a concept like how babel compiling behind the scenes

4. Babel is Transpiler / Compiler

## If we want to write JSX in Multiple Lines there are different ways,

---

-> const Heading = () => [

<h1>Hello Wolrd!</h1>,
<h2>Hi</h1>
];

-> const Heading = () => (

<div>
<h1>Hello World!</h1>,
<h1>Hi</h1>
);

-> const Heading = () => (
<> -> fragments

<h1>Hello World!</h1>
<h1>Hi</h1>
);

-> const Heading = () => (
<React.Fragment>

<h1>Hello World!</h1>
<h1>Hi</h1>
</React.Fragment>
);

-> const Heading = () => [

<h1 key='1'>Hello World!<h1>,
<h1 key='2'>Hi</h1>
];

## What makes React code Readable / Faster?

A. React Code is understandable because we are using JSX, Parcel, Here React is not doing anything it is Independently Existing, Most of the things are doing using JSX, Parcel, Babel.

## 4th Part:

## Planning

## Create Separate Folders for Each Component

1. First Create using const resObj = {} and pass props to it.
2. Use those props in Body to get desired output.
3. It is for creation of 1 Manual Card.
4. If We want to create cards dynamically (data) we use resList=[{},{},{}] array function. In array we pass each object information/ each data information to it.
5. If we want to pass cloudinary Image we need to do concatenation.
6. We use Map function to get dynamic data and use key as as id and use restauranch of each restaurant as props like resData={resData}

## Note:

6. Instead of key we use restaurant.id because key is bad way of writing and it is anti-key perspective it gives error while deploying into production.

7. Whenever we need to pass data dynamically and display cards dynamically we use optional chaining which will be the correct way of using props data.we taken optional chaining(resData?.data) which was used ealier in JavaScript.
8. Here we use Mock data to get / check whether are getting from array or not and we use mock api to get data and JSX checks cross-side scripting which means mockdata which is coming from api contains malicious data or not.
9. Once we get data from api we can store at resData variable like const { resData } = props; and we use props for reading data and for use that data in body and displays ouput which we are getting through mock data api.
