import React from 'react'

const Enquiry = () => {
  return (
    <>
        <div className='container p-5'>
            <div className='d-flex flex-column gap-4 p-5 m-5'>
                <input placeholder='NAME'></input>
                <input placeholder='EMAIL'></input>
                <input placeholder='SUBJECT'></input>
                <input placeholder='PHONE NUMBER'></input>
                <textarea placeholder='YOUR MESSAGE'></textarea>
                <button type="button" class="btn btn-info">Send Message</button>
            </div>
        </div>
    </>
  )
}

export default Enquiry