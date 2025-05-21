import React from 'react'
import { doLogout } from '../app/actions'

const Logout = () => {
  return (
    <form action={doLogout}>
        <button
        className="bg-red-600 text-white px-4 py-2 rounded-lg border-1 text-lg mx-1"
        type="submit">
            Logout
            </button>
    </form>
  )
}

export default Logout
