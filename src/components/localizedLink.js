import React from 'react'
import { Link } from 'gatsby'

export default props => {
  const { locale, to } = props;
  let path;
  locale !== 'en'
    ? path = `/${locale}${to}`
    : path = to
  return <Link {...props} to={ path }  />
}