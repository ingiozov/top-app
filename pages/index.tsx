import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'
import { withLayout } from '../layout/Layout'
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface'

function Home({ menu }: HomeProps): JSX.Element {
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

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  )

  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
