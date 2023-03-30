import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

interface Posts {
  title: string,
  description: string
}
const schema = yup.object().shape({
  title: yup.string().required("Post Title is a Required Field."),
  description: yup.string().required("Description  is a Required field")
})
export default function CreatePost() {
  const { register, handleSubmit, formState: { errors } } = useForm<Posts>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Posts) => {
    console.log("SUBMITTED DATA", data)
  }
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-2xl mx-auto space-y-2'>
        <div>
          <label className='text-lg' htmlFor="title">Title*</label>
          <input type="text" className={`w-full focus:outline-none py-3 px-6 border ${errors.title ? 'border-red-600' : 'border-gray-500'} `} placeholder='Enter title...' {...register("title")} />
          {errors.title && <p className='text-red-500 text-lg'>{errors.title?.message}</p>}
        </div>
        <div>
          <label className='text-lg' htmlFor="title">Description*</label>
          <textarea {...register("description")} placeholder='text goes here' className={`w-full h-52 py-3 focus:outline-none ${errors.description ? 'border-red-600' : 'border-gray-500'}  px-6 border border-gray-500`} id=""></textarea>
          {errors.description && <p className='text-red-500 text-lg'>{errors.description?.message}</p>}
        </div>
        <button type='submit' className='w-full text-xl text-white py-4 bg-blue-500 hover:bg-blue-600'>Submit</button>
      </form>
    </section>
  )
}
