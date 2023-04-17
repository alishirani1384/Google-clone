import React from 'react'
import MicroIcon from "../../assets/google-voice.png"
import Image from 'next/image'

function VoiceBtn() {
    return (
      <div className='flex flex-col items-center gap-3'>
           <button className='btn !btn-circle btn-lg gr'>
          <Image src={MicroIcon} width={35} height={25} alt='icon'/>
            </button> 
            <p className='uppercase'>try with voice</p>
      </div>
      
  )
}

export default VoiceBtn