// take in array of posts
// create new tag set (no duplicates)
// add tags of each post to each tag set
// return single array of tags based on tag set

import { ref } from 'vue'

const useTags = (posts) => {

  const tags = ref([])
  // doesn't need to be reactive
  const tagSet = new Set()

  posts.forEach(post => {
    // .add method to add tag for each post to the set. sets can't contain duplicates
    post.tags.forEach(tag => tagSet.add(tag))
  })

  // from set to individual elements
  tags.value = [...tagSet]

  return { tags }
}

export default useTags;
