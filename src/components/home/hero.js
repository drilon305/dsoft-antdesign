import React from 'react'
import { Carousel, Button } from 'antd';

const items = [
{
  id: '1',
  title: 'Web and mobile payment built for developers',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'
},
{
  id: '2',
  title: 'Work better together, schedule meeting',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
 
},
{
  id: '3',
  title: 'The best app to increase your productivity',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
},
]




const Hero = () => {

  return (
    <div id='hero' className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div className="container-fluid" key={item.id}>
              <div className="content">
                <h3>{item.title}</h3>
               <p>{item.content}</p> 
               <div className="btnHolder">
               <Button type="primary" size='middle' >Learn more!</Button>
               <Button> <i className="fas fa-desktop"></i>Watch a Demo</Button>
               </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
