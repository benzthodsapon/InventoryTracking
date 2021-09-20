import { Card,  } from 'antd';
import { DownSquareOutlined } from '@ant-design/icons';
import React, { useState,useEffect,} from "react";
import { useHistory } from "react-router-dom";
import { firestore } from '../index'
import "./Bed.css"


const { Meta } = Card;

 const Bed  = () => {
  const history = useHistory();
  const [ Bed ,setBed] =useState([{}]);
  const retriveData = () => {

    firestore.collection("Inventory").onSnapshot(snapshot => {

      console.log(snapshot);

      let MyBed = snapshot.docs.map(d => {

        const { id,status,type,img } = d.data()
        console.log(id,status,type,img)
        return { id,status,type,img}

      })

      setBed(MyBed)

    })
  }
  useEffect(() => {


    retriveData()


  },)
  
    return (
    <div className="BedCss">
        {
        
        Bed.map((item) => {
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
              
              <h1 onClick={ () =>history.push(`/SelectedItemBed/${item.id}`)}> <DownSquareOutlined /> กดปุ่มเพื่อยืม</h1>
             
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
};


export default Bed;