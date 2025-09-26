// import { useQuery } from '@tanstack/react-query'

const Posts = () => {
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: async () => {
  //     const response = await fetch('/api/posts')
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok')
  //     }
  //     return response.json()
  //   }
  // })

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-gray-900 rounded-xl shadow-lg border border-fuchsia-700">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Posts</h1>
    </div>
  )
}

export default Posts