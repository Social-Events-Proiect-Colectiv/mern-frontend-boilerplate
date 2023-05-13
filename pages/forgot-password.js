import React from 'react';
import Link from 'next/link';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import Header2 from '../components/organisms/Header2';

function ForgotPassword() {
  return (
    <>
      <Header2 />

      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol md='12'>
            <h2>Forgot Password</h2>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>

            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg'>Submit</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
              Remembered your password? 
              <Link href="/login">
                Login
              </Link></p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default ForgotPassword;
