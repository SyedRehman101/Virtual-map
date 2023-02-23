import React, { useEffect, useState } from 'react'
import Modal from './components/Modal';
import Draggable from 'react-draggable';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import BuyModal from './components/BuyModal';
import BookedNftInfo from './components/BookedNFTInfo';
import { AutoSizer, Grid, ScrollSync } from 'react-virtualized';
import { Scrollbars } from "react-custom-scrollbars";
const LandMap = () => {
  const gridNumber = 20161;

  const [selectedBoxId, setSelectedBoxId] = useState("");

  const [nftInfo, setNFTInfo] = useState({
    name: "",
    facebookLink: "",
    twitterLink: "",
    redditLink: ""
  })
  const BOX_SIZE = 50; // Set the size of the boxes in the grid
  const NUM_ROWS = 200;
  const NUM_COLS = 200;
  var counter = 1;

  const ZoomIn = () => {
    const square = document.getElementById('grid-container');
    if (counter < 5) {
        counter += 1.5;
        square.style.transform = `scale(${counter})`;

        square.classList.add("opacity-0");

        setTimeout(() => {
            square.classList.remove("opacity-0");
        }, 500)
    }
}

const ZoomOut = () => {
    const square = document.getElementById('grid-container');
    if (counter > 1) {
        counter -= 1.5;
        square.style.transform = `scale(${counter})`;
        square.classList.add("opacity-0");

        setTimeout(() => {
            square.classList.remove("opacity-0");
        }, 500)
    }
}

useEffect(()=>{
// window.addEventListener("wheel", (e) => {
//             if (e.deltaY > 0.2) {
        
//                 ZoomOut()
//             }
//             else if (e.deltaY < 2) {
//                 ZoomIn()
//             }
//             else { }
//         })
},[])

  const cellRenderer = ({ rowIndex, columnIndex, key, style }) => (


    <button id={`btn-${key}`} onClick={(e) => {



      const modal = document.getElementById("modal");
      const bookedmodal = document.getElementById("booked-nft-modal");
      const attributes = e.target.id.split("-")
      setSelectedBoxId(attributes[1] + "" + attributes[2])


      if (e.target.id === "btn-26-43") {

        bookedmodal.classList.remove('translate-x-96');
        modal.classList.add('translate-x-96');
      }
      else {


        modal.classList.remove('translate-x-96');
        bookedmodal.classList.add('translate-x-96');
      }


    }} key={key} style={style} class={`cursor-grab border-[#4a0c5f] ${key === "26-43" ? "bg-purple-200" : ""}  ${key === "26-43" ? "focus:bg-purple-300" : "focus:bg-red-600"} w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none`}></button>
  );

  // useEffect(() => {

  //   // window.addEventListener("wheel", (e) => {
  //   //     if (e.deltaY > 0.2) {
  //   // style="border-color:#2D4065"
  //   //         ZoomOut()
  //   //     }
  //   //     else if (e.deltaY < 2) {
  //   //         ZoomIn()
  //   //     }
  //   //     else { }
  //   // })

  //   let boxes = "";

  //   for (let i = 1; i < gridNumber; i++) {
  //     boxes += '<button  name="btns" style="border-color:#4a0c5f" class="cursor-grab focus:bg-red-600 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none" id="box-' + i + '"></button>'
  //   }

  //   document.getElementById('grid-box').innerHTML = boxes;

  //   const btns = [...document.getElementsByName("btns")];


  //   btns.forEach((elem, index) => {
  //     if (elem.id === "box-7274") {
  //       elem.style.backgroundColor = "plum"
  //     }
  //     elem.addEventListener('click', (e) => {
  //       // const index = elem.id.split('-');
  //       // const img = document.getElementById('img-' + index);

  //       // img.classList.remove('hidden')
  //       setSelectedBoxId(elem.id.split('-')[1])

  //       const modal = document.getElementById("modal");
  //       const bookedmodal = document.getElementById("booked-nft-modal");
  // if (elem.id === "box-7274") {

  //   bookedmodal.classList.remove('translate-x-96');
  //   modal.classList.add('translate-x-96');
  // }
  // else {
  //   const modal = document.getElementById("modal");

  //   modal.classList.remove('translate-x-96');
  //   bookedmodal.classList.add('translate-x-96');
  // }


  //       // img.style.right = `${-e.pageX - 14.45}`
  //     })
  //   })

  // }, [])


  // function renderBox({ columnIndex, key, rowIndex, style }) {
  //   const boxIndex = rowIndex * NUM_COLS + columnIndex;

  //   return (
  //     <div key={key} style={style}>
  //       <button
  //         style={{ width: BOX_SIZE, height: BOX_SIZE, }}
  //         class="cursor-grab border-[#4a0c5f] focus:bg-red-600 w-2 h-2 border-t-[0.5px] border-l-[0.5px] border-b-[0.5px] border-r-[0.5px]  flex-none"
  //         onClick={() => console.log(`Clicked box ${boxIndex}`)}
  //       />
  //     </div>
  //   );
  // }
  return (
    <>
      <div className="w-full gap-4 h-screen overflow-hidden relative">
        <div className="w-full col-span-4 h-full flex justify-center items-center absolute">
          {/* <TransformWrapper
            initialScale={1}

          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
            </>
            )}
          </TransformWrapper> */}
          {/* <TransformComponent>
                </TransformComponent> */}
            {/* <Draggable onMouseDown={(e) => {
                      e.stopPropagation()
                    }}>
          </Draggable> */}

          <div id="grid-container" className=" w-full h-[48rem] bg-gray-900 relative transition-all duration-300 flex overflow-hidden" >

            {/*Border-360 */}
            {/* <div className="w-full  border-1 border-gray-900 transition-all relative  duration-300 h-5/4 flex flex-row flex-wrap bg-gray-900 cursor-grab overflow-hidden" id="grid-box" >
            </div> */}

            {/* <div className='w-full'>
            </div> */}
            {/* <Scrollbars autoHide>
                </Scrollbars> */}
            <div style={{ height: "100vh", width: "100vw" }}>
              <AutoSizer>
                {({ height, width }) => (
                  <div style={{ height, width, overflow: "hidden" }}>
                    <Grid

                      cellRenderer={cellRenderer}
                      columnCount={NUM_COLS}
                      columnWidth={10}
                      height={height}
                      rowCount={NUM_ROWS}
                      rowHeight={10}
                      width={width}

                    />
                  </div>
                )}

              </AutoSizer>
            </div>

            

            {/* <AiOutlineDrag className='text-white' /> */}

          </div>


          <div className='flex flex-col fixed bottom-5 left-10 z-20'>

            <button onPointerDown={(e) => {
              e.preventDefault()
              // zoomIn()
              ZoomIn();
            }} className='  w-6 bg-black border rounded-t  border-gray-500 text-white p-1 hover:text-white'>
              +
            </button>
            <button onPointerDown={(e) => {
              e.preventDefault()
              // zoomOut();
              ZoomOut();
            }} className=' w-6 bg-black border rounded-b  border-gray-500 text-white p-1 hover:text-white'>
              -
            </button>
          </div>

        </div>
      </div>
      <Modal selectedBoxId={selectedBoxId} />
      <BookedNftInfo />
      <BuyModal nftInfo={nftInfo} />
    </>
  )
}

export default LandMap