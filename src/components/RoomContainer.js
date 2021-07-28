import RoomList from './RoomList'
import RoomFilter from './RoomFilter';
import {withRoomConsumer} from "../Context"
import Loading from './Loading'

function RoomContainer({context}){
    const {loading,sortedRooms,rooms}=context;
    if(loading){
        return <Loading/>;
    }
   
    return(
    <>
     <RoomFilter rooms={rooms}/>
    <RoomList rooms={sortedRooms}/>
   
  </>
  );
}




export default withRoomConsumer(RoomContainer);




/*const RoomContainer = () => {

    return ( 
        <RoomConsumer>
            {
            (value)=>{
                const {loading,sortedRooms,rooms}=value;
                if(loading){
                    return <Loading/>
                }
                return(
                <div>
                <RoomList rooms={sortedRooms}/>
                <RoomFilter rooms={rooms}/>
              </div>
              )
            }
        }
        </RoomConsumer>
  
     );
}*/
 
