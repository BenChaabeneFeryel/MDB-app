import React from "react";
import { MDBBox } from 'mdbreact';
import CarouselPage from "./CarouselPage";
import CardExample from "./CardExample";

const BoxPage = () => {
  return (
    <React.Fragment>
      <MDBBox display="flex" justifyContent="center" >
        <CarouselPage></CarouselPage>
      </MDBBox>
  
      <MDBBox className='row' >
        <CardExample className='col-sm-3'></CardExample>
        <CardExample className='col-sm-3'></CardExample>
        <CardExample className='col-sm-3'></CardExample>
      </MDBBox>
      <MDBBox display="flex" flex="row">
        d-flex flex-row
      </MDBBox>
      <MDBBox display="flex" flex="fill">
        d-flex flex-fill
      </MDBBox>
      <MDBBox display="flex" alignItems="start">
        d-flex align-items-start
      </MDBBox>
      <MDBBox display="flex" alignItems="center">
        d-flex align-items-center
      </MDBBox>
      <MDBBox display="flex" alignContent="start">
        d-flex align-content-start
      </MDBBox>
      <MDBBox display="flex" alignContent="center">
        d-flex align-content-center
      </MDBBox>
      <MDBBox display="flex" alignSelf="center">
        d-flex align-self-center
      </MDBBox>
      <MDBBox display="flex" alignSelf="start">
        d-flex align-self-start
      </MDBBox>
    </React.Fragment>
  );
};

export default BoxPage;