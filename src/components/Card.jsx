import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion"
// import { IoIosCloseCircleOutline } from "react-icons/io";
const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
     <FaRegFileAlt />
     <p className='text-sm mt-5 font-semibold leading-tight'>{data.description}</p>





    <div className='footer absolute bottom-0 w-full  left-0'>
<div className='flex items-center justify-between py-3 mb-3  px-8'>
  <h5>{data.filesize}</h5>
  <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
    {data.close ? <IoClose /> :  <FiDownload  size=".7em" color='#ffffff' />}

    </span>


</div>


{/* extra things */}
{
  data.tag.isOpen && (



<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center `}>
 <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>

</div>


  )
}















    </div>







    </motion.div>
  )
}

export default Card
