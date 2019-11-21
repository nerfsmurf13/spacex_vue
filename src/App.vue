<template>
  <div id="app">
    <app-header/>
    <app-navigation></app-navigation>
    <router-view/>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-navigation': Navigation
  }
}
</script>

<style>
*{
padding:0;
margin:0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
