import React from 'react'
import style from './Needhelp.module.css'
import { Link } from 'react-router-dom'
export default function Needhelp() {
  return (
    <div className="bg-dark text-white text-center py-2">
      Need help? Call us: <Link to="tel:01122783547" className="text-white fw-bold">01122783547</Link>
    </div>
  )
}
