<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="para">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import getPost from '../composables/getPost'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()

    // const { post, error, load } = getPost(props.id)
    const { post, error, load } = getPost(route.params.id)

    load()

    return { post, error}
  }
}
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .para {
    white-space: pre-wrap
  }
</style>