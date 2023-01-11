import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromApi } from '../utils/fetchFromApi';


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  console.log(channelDetail, videos); 

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight='95vh'>
      <div style={{
        background: 'linear-gradient(90deg, rgba(37,55,149,1) 0%, rgba(122,37,55,1) 100%)',
        zIndex: 10,
        height: '300px'
      }}
      />
      <ChannelCard channelDetail={channelDetail}/>
    </Box>
  )
}

export default ChannelDetail