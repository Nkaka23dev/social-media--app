import { useState, useEffect } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Post from './Post'

export interface Post {
  id: string,
  description: string,
  title: string,
  userId: string,
  username: string
}
export default function Home() {
  // const [user] = useAuthState(auth);
  const [postList, setPostList] = useState<Post[] | null>(null);

  const postRef = collection(db, 'posts');

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(data.docs.map((doc) => (
      { ...doc.data(), id: doc.id }
    )) as Post[])
  }
  useEffect(() => {
    getPosts()
  }, [])

  console.log(postList)
  return (
    <section>
      <div className='max-w-4xl mx-auto grid w-full space-y-8'>
        <p className='text-sky-500 text-3xl font-semibold uppercase'>All Post</p>
        <div className='text-lg text-gray-500 pr-20'>
          {postList?.map(post => <Post post={post} />)}
        </div>
      </div>
    </section>
  )
}
