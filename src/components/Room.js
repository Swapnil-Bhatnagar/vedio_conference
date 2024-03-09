import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
    const {roomID}=useParams();
    console.log(roomID);
    const meeting = async(element)=> {
        const appID = 1242210294;
        const serverSecret = "39d7ed582342633d0261d9466389dc89";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),
            "Swapnil"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
        container: element,
        scenario:{
            mode: ZegoUIKitPrebuilt.GroupCall,
        },
    });
    };
  return <div ref={meeting} style={{width:"100vw" , height:"100vw"}}>
      
    </div>;
  
};

export default Room;

