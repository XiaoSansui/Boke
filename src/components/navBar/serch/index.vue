<template>
  <div>
    <div class="search-box">
      <input type="text" placeholder=" ">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var searchBox = document.querySelectorAll(
      '.search-box input[type="text"] + span'
    );

    searchBox.forEach(elm => {
      elm.addEventListener("click", () => {
        elm.previousElementSibling.value = "";
      });
    });
  }
};
</script>

<style lang="scss" scoped>


.search-box {
  transform: scale(0.6);
  border: solid 5px black;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  input[type="text"] {
    font-family: Raleway, sans-serif;
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    padding: 5px 40px 5px 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 50px;
    transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 0.5) 600ms;
    &:focus {
      outline: none;
    }
    &:focus,
    &:not(:placeholder-shown) {
      width: 300px;
      transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
      + span {
        bottom: 13px;
        right: 10px;
        transition: bottom 300ms ease-out 800ms, right 300ms ease-out 800ms;
      }
      + span:after {
        top: 0;
        right: 10px;
        opacity: 1;
        transition: top 300ms ease-out 1100ms, right 300ms ease-out 1100ms,
          opacity 300ms ease 1100ms;
      }
    }
  }
  span {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -13px;
    right: -15px;
    transition: bottom 300ms ease-out 300ms, right 300ms ease-out 300ms;
    &:before,
    &:after {
      content: "";
      height: 25px;
      border-left: solid 5px black;
      position: absolute;
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
      opacity: 0;
      top: -20px;
      right: -10px;
      transition: top 300ms ease-out, right 300ms ease-out,
        opacity 300ms ease-out;
    }
  }
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 400;
  src: local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptsg8zYS_SKggPNyCg4Q4FqPfE.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 400;
  src: local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptsg8zYS_SKggPNyCg4TYFq.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqhPAMif.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>