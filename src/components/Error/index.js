import React from 'react'
import styles from './styles.scss'
const Error = ({ content = 'Error getting the data, please try after some time' }) => (<div className='error'><p>{content}</p></div>)

export default Error