import React from 'react'

const ItineraryPreparedView = (props: any) => {
  return (
    <>
    <div>ItineraryPreparedView</div>
    {
        JSON.stringify(props?.signleView)
    }
    </>
  )
}

export default ItineraryPreparedView