import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { PanelRight } from "lucide-react"
import { useNavigate } from "react-router-dom"



export default function Bed() {

    return (
        <div className="">
            
            <p>Bedd</p>

        </div>
    )
}




const DRAWER_SIDES = ["right"]

const navList = [
  {
    "item" : "Home",
    "link" : "/",
  },
  {
    "item" : "Doctor",
    "link" : "/doctor",
  },
  {
    "item" : "Patient",
    "link" : "/patient",
  },
  {
    "item" : "Admin",
    "link" : "/admin",
  },
  {
    "item" : "Equiptment",
    "link" : "/equipt",
  },
  {
    "item" : "Appointments",
    "link" : "/appointments",
  },
  {
    "item" : "Enqury messages",
    "link" : "/enqury",
  },
]

export default function DrawerWithSides({ sides }) {
  
  let DRAWER_SIDES = sides;

  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-2 ">
      {DRAWER_SIDES.map(side => (
        <Drawer key={side} direction={side === "bottom" ? undefined : side}>
          
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon" className="capitalize">
              <PanelRight strokeWidth={3} />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="data-[vaul-drawer-direction=left]:w-70 data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh] ">
            
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>

            <div className="no-scrollbar h-full flex flex-col items-center justify-center gap-5 overflow-y-auto px-4">
              {navList.map((item, index) => (
                <Button 
                  className={'text-2xl'}
                  onClick={()=>navigate(item.link) } 
                  key={index} 
                  variant="link" > 

                  {item.item}

                </Button>
              ))}
            </div>

            <DrawerFooter>
              <Button onClick={()=>navigate('/admin/profile') }  > Admin Profile </Button>
              <Button onClick={()=>navigate('/hospital/profile') } > Hospital Profile </Button>
              {/* <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose> */}
            </DrawerFooter>

          </DrawerContent>
          
        </Drawer>
      ))}
    </div>
  )
}
