import { Card, Avatar } from 'antd';
import { DownSquareOutlined } from '@ant-design/icons';
import React, { useState,useEffect } from "react";
import { firestore } from '../index'
import "./OxygenTankCss.css"

const { Meta } = Card;

 const OxygenTank = () => {
  const [ OxygenTank ,setOxygenTank] =useState([{}]);
  const retriveData = () => {

    firestore.collection("OxygenTank").onSnapshot(snapshot => {

      console.log(snapshot);

      let MyOxygenTank = snapshot.docs.map(d => {

        const { id,status,type,img } = d.data()
        console.log(id,status,type,img)
        return { id,status,type,img}

      })

      setOxygenTank(MyOxygenTank)

    })
  }
  useEffect(() => {


    retriveData()


  },)
  
    return (
    <div className="OxygenTankCss">
        {
        
        OxygenTank.map((item) => {
          return (
            <Card
            style={{ width: 300,marginRight: "20px" }}
            cover={
              <img 
                style ={{width: 200,height:250}}
                alt="example"
                src= {item.img}
              />
            }
            actions={[
              <h1> <DownSquareOutlined /> กดปุ่มเพื่อยืม</h1>
              
              
            ]}
          >
             <Meta
              title ={item.id}
              description={item.type}
            />
             <Meta
              description={item.status}
            />
          </Card>
          )
        })
      }
    </div>
)
};


export default OxygenTank;