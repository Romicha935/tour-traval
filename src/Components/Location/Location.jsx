import React from 'react'

const Location = () => {
  return (
    <div>
        <div>
            <div className=' container w-full items-center'>
              <h1 className='inline-block border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Location to Visit</h1>
              <div className='rounded-xl py-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7497571.9880995415!2d85.04415333476365!3d23.427118821374112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1725525156993!5m2!1sen!2sbd" width="100%" height="360" style={{border: 0}} allowfullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               
              </div>
            </div>
        </div>
    </div>
  )
}

export default Location