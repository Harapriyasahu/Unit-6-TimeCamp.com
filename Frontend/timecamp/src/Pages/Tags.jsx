import React from "react";
import { useState } from "react";
import style from "../Styled/tag.module.css";
import Todo from "./Todo";
import Sidebar from "../Components/Sidebar";
import {
   
    Container,
    
  } from "@chakra-ui/react";


const Tags = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle]= useState(true);

  return (
    
    <div className={style.conttainer}>

<Container w="17%" padding={0} margin={0}>
        <Sidebar />
      </Container>
       


      <div className={style.outerTag}>
       
        <div className={style.tags}>
            <h1 style={{fontSize:"28px" , marginBottom:"70px"}}>Tags</h1>
          <button className={style.tagbtn} onClick={()=>setToggle(!toggle)} >+Add tag list</button>
          {/* Tags */}
          <p className={style.paradiv}>
            Manage your tags, like list of customers or activities. All
            workspace members can assign tags to time entries, when they track
            time. Project managers can set lists of tags for projects. Reports
            can be filtered and grouped by tags.
          </p>

          <button className={style.showbtn}>
            {show ? "Show archived tags" : "Hide archived tags"}
          </button>

            {
              toggle?<div><Todo/></div>: null
            }

          <hr className={style.hrtag} />
          <div className="downdiv">
            <button className={style.savebtn}>Save Setting</button>
            <button className={style.backbtn}>Back Addons list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;