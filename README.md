# Image Carousal

Just a fun project to learn.

## HTML
```html
<div class="container">
  <div class="left">⏮</div> <!-- button 1 -->

  <div class="carousal"> <!-- carousal -->
    <img id="0" src="#" />

    <div class="frame"> <!-- frame -->
      <img id="1" src="#" />
    </div>

    <img id="2" src="#" />
  </div>
  
  <div class="right">⏭</div> <!-- button 2 -->
</div>
```
## JS
### Import
```js
const imgCaro = require('img-caro');
```
---
### Movement buttons
- `moveRight` - moves image to right
- `moveLeft` - moves image to left
```js
document.querySelector('.right').onclick = () => {
  imgCaro.moveRight(
    document.querySelector('.frame'), 
    document.querySelector('.carousal')
  )
};
```
---
### Automatice Navigation
To automatically move images use `moveRight` or `moveLeft` to call periodically
```js
window.setInterval(() => imgCaro.moveRight(frameElement, carousalElement), 1000);
```
---
### Navigation for Images
This create a small bar and supports click to skip images
```js
imgCaro.createNav(frameElement, carousalElement);
```
DOM structure for Navbar
```
nav-container
   |- nav-item
   |- nav-item
```
The classes above can be used to style as follows
```css
.nav-container {
  background-color: black;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
}
.nav-item {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
}
.nav-item.active {
  opacity: 1;
}
```