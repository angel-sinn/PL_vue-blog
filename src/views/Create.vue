<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" v-model="title" required>
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

export default {
  setup() {
    const title = ref("")
    const body = ref("")
    const tag = ref("")
    const tags = ref([])

    const router = useRouter()

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, '') // removes all whitespace
        tags.value.push(tag.value)
      }
      tag.value = '';
    }

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp()
      }

     const res = await projectFirestore.collection('posts').add(post)
    //  console.log(res);

      // router.push('/');
      router.push({ name: 'Home'})
    }

    return { title, body, tag, handleKeydown, tags, handleSubmit }
  }

}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgb(68, 162, 224);
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: rgb(68, 162, 224);
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 7px;
    border-radius: 15px;
    font-size: 14px;
  }
</style>