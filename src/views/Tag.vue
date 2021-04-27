<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="postsWithTag"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  components: { PostList, Spinner},
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()

    load()

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })

    return { posts, error, postsWithTag }
  }
}
</script>

<style>

</style>