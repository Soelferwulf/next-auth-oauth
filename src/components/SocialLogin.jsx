import React from 'react'
import { doSocialLogin } from '../app/actions'

export const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
            <button
            className="bg-amber-400 text-black px-4 py-2 rounded-lg border-1 text-lg mx-1"
            type="submit" name="action" value="google">
                Sign In With Google
            </button>

            <button
            className="bg-black text-amber-400 px-4 py-2 rounded-lg border-1 text-lg mx-1"
            type="submit" name="action" value="github">
                Sign In With GitHub
            </button>
        </form> 
  )
}
