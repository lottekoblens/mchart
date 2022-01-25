# :microscope: Morphological chart

This is a project for a digital version of a morphological chart. It's a toolkit to find substitutes and understand where ingredients can be found to create new recipes.

## :bookmark_tabs:	 Table of Contents

* [Concept](https://github.com/lottekoblens/mchart#bulb-concept)
* [Data](https://github.com/lottekoblens/mchart#file_folder-data)
* [Libraries](https://github.com/lottekoblens/mchart#card_index-libraries)
* [Installation](https://github.com/lottekoblens/mchart#wrench-installation)
* [Live website](https://github.com/lottekoblens/mchart#bar_chart-live-website)
* [Rubric](https://github.com/lottekoblens/mchart#clipboard-rubric)
* [Wishlist](https://github.com/lottekoblens/mchart#pencil-wishlist)
* [Resources](https://github.com/lottekoblens/mchart#mag_right-resources)
* [License](https://github.com/lottekoblens/mchart#page_with_curl-license)

## :bulb: Concept

The intention is that the user puts his recipe next to the website and can search for alternatives for ingredients of his recipe via the morphological chart. For example, to make his recipe completely vegetarian/vegan. The user can also develop a completely new recipe by using the morphological chart.

![Concept](https://github.com/lottekoblens/mchart/blob/master/public/concept.png)

## :file_folder: Data 

For this project we got data from an excel file. This file had to be changed to a usable file for d3.js and React. The file has therefore been converted to a javascript file consisting of children nested in other children. It can be found [here](https://github.com/lottekoblens/mchart/blob/master/src/data.js).

## :card_index: Libraries

* React: React is a JavaScript library for building user interfaces with the use of components.
* D3.js: D3.js is a JavaScript library for making and controlling documents that are based on data. In this project it's used to create the Radial dendrogram and the legend of the Radial Dendrogram.

## :wrench: Installation

If you want to use this code you have to clone the repository by putting this in your terminal:

``` git clone https://github.com/lottekoblens/mchart.git ```

Go to the folder of the project and hen install everything with:

``` npm install ```

After that you can run the project by simply typing this in your terminal:

``` npm start ```

## :bar_chart: Live website

[Link to live website](https://mchart.vercel.app/)

## :clipboard: Rubric

![Rubric](https://github.com/lottekoblens/mchart/blob/master/public/rubric.png)

## :pencil: Wishlist

* Make search function more forgiving. So if the user makes a typo the correct result will still be highlighted.

## :mag_right: Resources

* pjn98n7l5q. (2020, 30 januari). CodeSandbox. Geraadpleegd op 3 januari 2022, van https://codesandbox.io/s/pjn98n7l5q?file=/src/Map.js:541–576
* Adhitama, P. (2021, 14 december). Simple Search-bar Component & Functionality in React. Medium. Geraadpleegd op 3 januari 2022, van https://medium.com/@pradityadhitama/simple-search-bar-component-functionality-in-react-6589fda3385d
* D3 wiki. (z.d.). Cluster Layout - D3 wiki. Geraadpleegd op 3 januari 2022, van https://d3-wiki.readthedocs.io/zh_CN/master/Cluster-Layout/
* Fill. (2019, 14 januari). d3.hierarchy. Observable. Geraadpleegd op 3 januari 2022, van https://observablehq.com/@d3/d3-hierarchy
* D3 wiki. (z.d.-b). Cluster Layout - D3 wiki. Geraadpleegd op 3 januari 2022, van https://d3-wiki.readthedocs.io/zh_CN/master/Cluster-Layout/
* GeeksforGeeks. (2020, 23 september). D3.js node.descendants() Function. Geraadpleegd op 3 januari 2022, van https://www.geeksforgeeks.org/d3-js-node-descendants-function/
* Laurens technical support
* React. (z.d.). Rendering Elements –. Geraadpleegd op 18 januari 2022, van https://reactjs.org/docs/rendering-elements.html
* d3.js if else regex string match to change style. (2015, 25 juli). Stack Overflow. Geraadpleegd op 19 januari 2022, van https://stackoverflow.com/questions/31626939/d3-js-if-else-regex-string-match-to-change-style
* React. (z.d.-a). Refs and the DOM –. Geraadpleegd op 19 januari 2022, van https://reactjs.org/docs/refs-and-the-dom.html

## :page_with_curl: License

Made by: Lotte Koblens, Zara Schriever & Lisa Nijman

License by [MIT](https://github.com/lottekoblens/mchart/blob/master/LICENSE)
