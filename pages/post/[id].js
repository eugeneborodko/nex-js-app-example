import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from "./../../components/layout"

const Post = ({ posts }) => {
  const router = useRouter()
  const { id } = router.query
  const post = posts[id - 1]

  if (!posts) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Layout title={'Posts Page'}>
      <div className="post">
        <h1 className="title title_center">{`Post ${id}`}</h1>
        <div className="container">
          <p className="paragraph">{post.text}</p>
          <Link href={'/posts'}>
            <a className="post__link">Back to posts</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

Post.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/get-content/posts')
  const posts = await response.json()

  return {
    posts
  }
}

export default Post