<script src="./Octagon.js"></script>

<template lang="pug">
  .octagon
    .image-container
      img(:src="image" )
      .line-l
      .line-tl
      .line-t
      .line-tr
      .line-r
      .line-br
      .line-b
      .line-bl

    h3.title
      span {{title}}

    .content
      p {{content}}
</template>

<style scoped lang="scss">
  .octagon {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover{
      [class*='line'] {
        background: #F35F4d;
        box-shadow: 0 0 1px #F35F4d;
      }
    }
  }

  [class*='line'] {
    width: 65px;
    height: 7.15px;
    position: absolute;

    border-radius: 2px;
    background: #ececec;
    transition: all 0.5s;
    box-shadow: 0 0 1px #888;
  }

  .line-t {
    top: 0;
    left: 44.5px;
  }

  .line-tr {
    top: 22px;
    right: -7px;
    transform: rotate(45deg)
  }

  .line-tl {
    top: 22px;
    left: -7px;
    transform: rotate(-45deg)
  }

  .line-r {
    top: 74.75px;
    right: -29.25px;
    transform: rotate(90deg)
  }

  .line-l {
    top: 74.75px;
    left: -29.25px;
    transform: rotate(90deg)
  }

  .line-b {
    bottom: 0;
    left: 44.5px;
  }

  .line-br {
    bottom: 21.45px;
    right: -7.15px;
    transform: rotate(-45deg)
  }

  .line-bl {
    bottom: 21.45px;
    left: -7px;
    transform: rotate(45deg)
  }

  .image-container {
    width: 156px;
    height: 156px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: 75%;
    }
  }

  .title {
    margin: 20px 0 10px;
    text-align: center;

    color: #555;
    font: 18px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: capitalize;

    span {
      position: relative;
      display: inline-block;

      &:before, &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 2px;
        margin-top: 1px;
        background: #F35F4d;
      }

      &:after {
        left: 20%;
        width: 60%;
        margin-top: 6px;
      }
    }
  }

  .content {
    margin: 15px 0 0;
    text-align: justify;
    color: #888;
    font: 14px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>
