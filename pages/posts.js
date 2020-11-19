import Link from 'next/link'

import Layout from "../components/layout"

const Posts = ({ posts }) => {
  return (
    <Layout title={'Posts Page'}>
      <h1 className="title title_center">Posts Page</h1>
      <ul className="posts-list">
        {
          posts.map(post => {
            return (
              <li className="posts-list__item" key={post.id}>
                <Link href={'/post/[id]'} as={`/post/${post.id}`}>
                  <a className="posts-list__link">{post.title}</a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </Layout>
  )
}

Posts.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/get-content/posts')
  const posts = await response.json()
  return {
    posts
  }
}

export default Posts