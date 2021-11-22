import { Card,  } from 'antd';
import { DownSquareOutlined } from '@ant-design/icons';
import React, { useState,useEffect,} from "react";
import { firestore } from '../index'
import "./Bed.css"
const { Meta } = Card;
const BorrowedItems = () => {
    
  const [ BorrowedItems ,setBorrow] =useState([{}]);
  const retriveData = () => {

    firestore.collection("borrow").onSnapshot(snapshot => {

    

      let MyBorrow = snapshot.docs.map(d => {

        const { id, img, location, status, type } = d.data()
        console.log(id, img, location, status, type)
        return {id, img, location, status, type}

      })

      setBorrow(MyBorrow)

    })
  }
  useEffect(() => {


    retriveData();

  })
    
    return (
        <div className="BedCss">
        {
        
        BorrowedItems.map((item) => {
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
              
              <h1> <DownSquareOutlined /> กดปุ่มเพื่อคืน</h1>
             
            ]}
          >
            <Meta
              title ={`รหัสอุปกรณ์ ${item.id}`}
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
  
    }
  export default BorrowedItems;