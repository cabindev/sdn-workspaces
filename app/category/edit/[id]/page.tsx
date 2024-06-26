'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const EditCategory = ({ params }: { params: { id: string } }) => {
  const [category, setCategory] = useState('')

  const router = useRouter()
  const { id } = params

  const fetchCategories = async (id: Number) => {
    try {
      const res = await axios.get(`/api/categories/${id}`)
      setCategory(res.data.name)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchCategories(parseInt(id))
    }
  }, [id])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.put(`/api/categories/${id}`, { name: category })
      router.push('/category')
    } catch (error) {
      console.error('Failed to update category', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Edit Category</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category Name
          </label>
          <input
            type="text"
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
       
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditCategory
