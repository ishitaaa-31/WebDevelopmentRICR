import React from 'react'

const EditProfileModal = ({onClose}) => {
  return (
    
   <>
  <div className='fixed inset-0 bg-black/80 flex items-center justify-center  z-100'>
   <div className='bg-white  w-5xl max-h-[85vh] overflow-y-auto '> 
    {/* //overflow-auto se scrollbar ajayega */}
    <div>Edit profile modal</div>
   <button onClick={()=>onClose()}>x</button>
   </div>

  </div>
   </>
  )
}

export default EditProfileModal;