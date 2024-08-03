import React, { useState,useRef } from 'react'
import Card from './Card'
// import { motion } from "framer-motion"

const Foreground = () => {


const ref  = useRef(null);





  const data = [
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".1mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"Download Now...",
        tagColor:"green",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:"5mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"upload",
        tagColor:"blue",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".6mb",
      close: true,
      tag:{isOpen:false,
        tagTitle:"Download Now...",
        tagColor:"green",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".5mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"Download Now...",
        tagColor:"blue",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".9mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"Download Now...",
        tagColor:"green",

      }
      },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".1mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"Download Now...",
        tagColor:"green",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:"5mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"upload",
        tagColor:"blue",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".6mb",
      close: true,
      tag:{isOpen:false,
        tagTitle:"Download Now...",
        tagColor:"green",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".5mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"Download Now...",
        tagColor:"blue",


      },

    },
    {
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      filesize:".9mb",
      close: true,
      tag:{isOpen:true,
        tagTitle:"Download Now...",
        tagColor:"green",


      },

    },
  ];

  // useState()
  return (
    <div ref={ref} className=' fixed z-[3] top-0 left-0 w-full h-full  flex gap-10 flex-wrap p-5'>
     {data.map((item,index)=>(
      <Card data={item} reference={ref}/>
     ))}

















    </div >







  )
}

export default Foreground
