import Layout from '../components/Layout'
import BlogItem from '../components/BlogItem'

export default function Home({posts}) {
  return (
    <Layout title='Главная'>
      <h1>Интересный блог</h1>
      <div className='posts'>
        {posts.map(post=>(
          <BlogItem key={post.id} title={post.title} description={post.body} id={post.id}/>
        ))}
      </div>

    </Layout>
  )
}

export const getServerSideProps = async () => {
  console.log(process.env.API_URL)
  const data = await fetch(`${process.env.API_URL}/posts`)
  const posts = await data.json()

  return {
    props: { posts },
  }
}
