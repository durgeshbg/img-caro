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