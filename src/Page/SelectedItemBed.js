import { useHistory,useLocation } from "react-router-dom";
import React, { useState,useEffect,} from "react";
import { Card, } from 'antd';
import { firestore } from '../index'
import { CheckCircleOutlined } from '@ant-design/icons';
import "./detail.css"

const { Meta } = Card;
const SeletedItemBed = () => {
    const history = useHistory();
    console.log(history.location.pathname.substr(history.location.pathname.length - 1));
    
    const [ Bed ,setBed] =useState([{}]);
 
  const retriveData = () => {

    firestore.collection("Inventory").onSnapshot(snapshot => {

      console.log(snapshot);

      let MyBed = snapshot.docs.map(d => {

        const { id,status,type,img,location } = d.data()
        console.log(id,status,type,img,location)
        return { id,status,type,img,location}

      })

      setBed(MyBed)

    })
    
    }
  
  useEffect(() => {


    retriveData()


  },)
 
    return (
        
        <div className = "Bedid">
            {
    Bed.map((item) => {
      return (
        <>
        {
                      console.log(item.id)
                  } 
         {
           item?.id?.toString() === history.location.pathname.substr(history.location.pathname.length - 1) && (
               <div>
                  
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
              <h1 ><CheckCircleOutlined />ยืนยันการยืม</h1>
              
            ]}
            
          >
            <Meta
              title ={`รหัสอุปกรณ์ ${item.id}`}
              description={item.type}
            />
             <Meta
              description={`สถานที่จัดเก็บ ${item.location}`}
            />
             
          </Card>
               </div>
            
           )
         }
         
        </>
      )
    })
  }
  
        </div>
    )
  
  }
  export default SeletedItemBed;