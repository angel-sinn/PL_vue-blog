<template>
  <div class="home">
    <h1>My Lighthouse Labs Journey</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  // composition api - variables not reactive by default, but can use refs to make it reactive
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>