import React from "react";

import { Grid, Image, Container,List } from "semantic-ui-react";

function Sidenav(props) {
  return (
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column width={3}>
          <div className="sidebar ">
            <List>
              <List.Item>Apples</List.Item>
              <List.Item>Pears</List.Item>
              <List.Item>Oranges</List.Item>
              <List.Item>Oranges</List.Item> 
              <List.Item>Oranges</List.Item> 
              <List.Item>Oranges</List.Item> 
              <List.Item>Oranges</List.Item> 
              <List.Item>Oranges</List.Item> 
              <List.Item>Oranges</List.Item> 
              <List.Item>Oranges</List.Item> 
              <List.Item>Oranges</List.Item>
            </List>
          </div>
        </Grid.Column>
        <Grid.Column width={13}>
          {console.log(props.children)}
          {props.children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
    // <Row>
    //   <Col sm={2} className='pr-0'>
    //     <div className='sidebar'>

    //     </div>
    //   </Col>
    //   <Col sm={10} className='pl-0'>
    //     {/* <Navbar /> */}
    //     {console.log(props.children)}
    //     {props.children}
    //   </Col>
    // </Row>
  );
}

export default Sidenav;
