import React, { useState } from 'react'
import Panel from './Panel'

export default function Acccordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    // const handleActive = (index) =>{
    //     console.log(index);
    //     setActiveIndex(index)
    // }

  return (
    <>
        <h2>Nahian</h2>

        <Panel onActive={()=> setActiveIndex(0)} isActive={activeIndex === 0 && true} title = "Paid Course">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nesciunt a dolores itaque laboriosam corporis libero tenetur velit fugiat animi explicabo sed magni consequuntur quos sunt dolor iure. Illo ipsam sequi culpa odit quas officia neque iure, rerum dicta aliquam qui sint vitae! Iste modi minus iure, optio commodi ex.
        </Panel>

        <Panel onActive={()=> setActiveIndex(1)} isActive={activeIndex === 1 && true} title = "Free Course">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, quisquam officia ducimus ipsa sit molestias modi iusto et assumenda aperiam quibusdam amet mollitia repellendus facere accusantium alias, nisi itaque quod voluptatem nostrum velit provident nulla? Ipsam, voluptate. Vitae reiciendis doloremque autem ullam nemo nesciunt incidunt dicta velit quidem placeat?
        </Panel>


        <Panel onActive={()=> setActiveIndex(2)} isActive={activeIndex === 2 && true} title = "Free Course">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis eveniet, quisquam officia ducimus ipsa sit molestias modi iusto et assumenda aperiam quibusdam amet mollitia repellendus facere accusantium alias, nisi itaque quod voluptatem nostrum velit provident nulla? Ipsam, voluptate. Vitae reiciendis doloremque autem ullam nemo nesciunt incidunt dicta velit quidem placeat?
        </Panel>

    </>
  )
}
