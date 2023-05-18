import React from 'react'

export default function About() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-2xl">About this project</h1>
      <p>
        In this project, I tried to use React Reducer together with React Context like in the tutorial from React docs
        "Scaling Up with Reducer and Context". I like the way it works but I wouldn't choose React Reducer in a small or
        medium project.
      </p>
    </section>
  )
}
