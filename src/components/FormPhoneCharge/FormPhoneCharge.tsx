import { Input } from "../ui/input"


export const FormPhoneCharge = () => {
  return (
    <div className="p-4  rounded-lg shadow-md w-1/3">
        <h1 className="text-center text-2xl font-bold mb-4  ">Form Charge your Phone</h1>
        <div className="flex  gap-4">
            <Input name="inputChrageNumber" type="data" className="font-bold text-3xl tracking-wider" placeholder="100" />
            <Input name="outputChrageNumber" type="data" className="font-bold text-3xl tracking-wider" readOnly placeholder="125"  />
            
        </div>


    </div>
  )
}


