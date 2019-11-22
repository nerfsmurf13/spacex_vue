<script>
export default {
  name: "Slider",
  props: {
    imageArray: Array
  },
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },
  computed: {
    currentImg: function() {
      return this.imageArray[Math.abs(this.currentIndex) % this.imageArray.length];
    }
  },
  created() {},
  mounted: function() {
    this.startSlide();
    
  },
  updated() {
this.next()
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 6000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  }
};
</script>
<template>
  <div class="slider-container">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a @click="prev" class="prev" href="#">&#10094; Previous</a>
    <a @click="next" class="next" href="#">&#10095; Next</a>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

.slider-container {
  width: 100%;
}

img {
  width: 100%;
  object-fit: cover;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
