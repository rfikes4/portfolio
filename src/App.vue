<template>
  <div id="app">
    <app-nav @loaded="loaded = $event" @mobile="mobile = $event"></app-nav>
     <transition :duration="{ enter:enter, leave:leave }" mode="out-in" v-if="loaded">
      <router-view @index="index = $event" :indexX="index" @enter="enter = $event" @leave="leave = $event" @mobileSub="mobileSub = $event" :class="{ isMobile: mobile, isMobileSub: mobileSub}"></router-view>
    </transition>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      enter: 0,
      leave: 1000,
      loaded: false,
      mobile: false,
      mobileSub: false,
      index: 7
    }
  },
  watch: {
    '$route' (to, from) {
       window.scrollTo(0,0);
    }
  },
  mounted() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.mobileSub = true;
    }
  }
}
</script>

<style lang="scss">
