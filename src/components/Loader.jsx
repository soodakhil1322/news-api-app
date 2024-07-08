import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div className='flex items-center justify-center py-40'>
          
            <Button  variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
    </div >
  
  )
}

export default Loader
