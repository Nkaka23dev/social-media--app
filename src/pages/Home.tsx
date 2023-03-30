import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

export default function Home() {
  const [user] = useAuthState(auth);
  const [postList, setPostList] = useState(null);
  const postRef = collection(db, 'posts')
  const getPosts = async () => {
    const data = await getDocs(postRef);
  }
  getPosts()
  return (
    <section>
      <div className='max-w-6xl mx-auto grid w-full space-y-8'>
        <p className='text-sky-500 text-3xl font-semibold uppercase'>user's information</p>
        <div className='text-lg text-gray-500 pr-20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolores impedit aliquid, maiores quas ex nihil iure modi, amet quo quam. Tenetur deserunt beatae quasi ipsam numquam dolor minus quod et, magnam veritatis, suscipit ab itaque incidunt quidem, eaque unde! Minima mollitia odio dolorem cupiditate reiciendis pariatur veritatis quos nulla placeat alias sapiente perspiciatis non corporis cumque itaque, eum magni. Debitis cumque quam fugit quisquam maxime, blanditiis obcaecati vitae quae reprehenderit recusandae est sint perferendis! Illo facere voluptas saepe, necessitatibus totam officiis, eius perferendis at, nam quos earum est repellendus enim quaerat cum hic? Incidunt dolorem minima dignissimos atque nobis! Rerum exercitationem vitae nemo harum cumque placeat nihil aspernatur velit obcaecati. Placeat maxime laborum vel culpa veniam error cum nostrum sequi asperiores ipsa non ducimus illum, facere ut, harum eaque dolorem minima corporis dolore reiciendis odit explicabo minus? Unde quaerat assumenda, mollitia perspiciatis sunt nam alias! Veniam commodi porro quo temporibus nemo similique velit omnis illo natus architecto, praesentium incidunt ad eveniet? Sunt, quam quia illum possimus quos unde quidem ea perspiciatis sit asperiores esse ducimus voluptates, dolorem eveniet, non explicabo dolorum modi exercitationem. Eius animi culpa quidem qui quia modi. Facilis quis numquam quidem iure aliquam omnis, quibusdam earum.
        </div>
      </div>
    </section>
  )
}
