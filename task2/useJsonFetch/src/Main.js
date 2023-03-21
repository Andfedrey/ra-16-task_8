import React from 'react'
import useJsonFetch from './useJsonFetch';

export default function Main() {
  const [data, loading, error] = useJsonFetch(url, opts);
  return (
    <div>Main</div>
  )
}
