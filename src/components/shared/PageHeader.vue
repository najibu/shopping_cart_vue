<template>
  <nav class="navbar navbar-light bg-faded" v-if="profile.limit">
    <div class="container">
      <a href="/" class="navbar-brand">SHOP</a>

      <span class="navbar-text float-xs-right">
        Hello <strong>{{ fullName }}, your credit limit is </strong>
        <shopping-cart-limit :limit="profile.limit"></shopping-cart-limit>
      </span>
    </div>
  </nav>
</template>

<script>
  import ShoppingCartLimit from './../shop/shopping-cart/ShoppingCartLimit'
  import { mapActions, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        profile: state => state.profile.data
      }),
      fullName () {
        return `${this.profile.firstName} ${this.profile.lastName}`
      }
    },
    methods: mapActions([
      'getProfile'
    ]),
    components: { ShoppingCartLimit },
    created () {
      this.getProfile()
    }
  }
</script>
