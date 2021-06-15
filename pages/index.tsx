import React, { useEffect, useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">Heading</Htag>
      <Button appearance="primary" arrow="right">
        button
      </Button>
      <Button appearance="ghost" arrow="down">
        button
      </Button>
      <P size="l">large</P>
      <P>medium</P>
      <P size="s">small</P>
      <Tag color="ghost">ghost</Tag>
      <Tag color="red">red</Tag>
      <Tag color="green">green</Tag>
      <Tag color="primary">primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  )
}
