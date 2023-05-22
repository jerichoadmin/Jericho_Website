import React, {useState, useEffect} from 'react'
import EditSalesPost from '../EditSalesPost'
import MobileEditSalesPost from '../MobileEditSalesPost'

function EditSalesMain() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <div>
    {isMobile ? (
      <MobileEditSalesPost />
    ) : (
      <EditSalesPost />
    )}
  </div>
  )
}

export default EditSalesMain;