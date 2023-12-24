# Image Carousal

Just a fun project to learn.

### HTML
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
# JS
- `moveRight` - moves image to right
- `moveLeft` - moves image to left
```js
const imgCaro = require('img-caro');

document.querySelector('.right').onclick = () => {
  imgCaro.moveRight(
    document.querySelector('.frame'), 
    document.querySelector('.carousal')
  )
};
```