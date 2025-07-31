import { ArrowRightLeft } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Form } from "react-hook-form";

export const FormPhoneCharge = () => {
  const [outputChrageNumber, setOutputChrageNumber] = useState<number>(0);
  // const [inputChargeNumber, setInputChargeNumber] = useState<number>(0);
  const [savedValue, setSavedValue] = useState<number>(0);

  // let inputChrageNumber: number;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseFloat(inputValue) || 0;

    const output = parsedValue * 1.25;
    const taxed = parsedValue * 1.43;
    const saved = taxed - output;
    setSavedValue(saved);
    // setInputChargeNumber(parsedValue);
    setOutputChrageNumber(output);
  };
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;
  //   const parsedValue = parseFloat(inputValue) || 0;
  //   console.log(parsedValue);
  //   const valueWithTax = parsedValue * 1.43;
  //   console.log(valueWithTax);
  //   setOutputChrageNumber(parsedValue * 1.25);
  //   // console.log("outputChargeNumber", outputChrageNumber);
  //   const savedValue = valueWithTax - outputChrageNumber;
  //   // setInputChargeNumber();
  //   console.log("savedValue", savedValue);
  //   // console.log("inputChargeNumber", inputChargeNumber);
  // };

  return (
    <div className="p-4  rounded-lg shadow-md w-1/3 rtl:true" dir="rtl">
      <h1 className="text-center text-2xl font-bold mb-4  ">
        Form Charge your Phone
      </h1>
      {/* Charge Calc */}
      <div className="flex  gap-4 align-middle items-center justify-center">
        {/* <Form> */}
        <Input
          name="inputChrageNumber"
          type="data"
          className="font-bold text-3xl tracking-wider"
          placeholder=" قيمة الشحن "
          onChange={handleInputChange}
        />

        <ArrowRightLeft color="gray" width={"200px"} />
        <Input
          name="outputChrageNumber"
          type="data"
          className="font-bold text-3xl tracking-wider bg-gray-300 outline-0 focus:outline-0 "
          readOnly
          placeholder=" المبلغ المطلوب دفعه "
          value={outputChrageNumber}
        />
        {/* </Form> */}
      </div>
      {/* Saved Amount  */}
      <div>
        <p className="text-center text-gray-500 mt-2">
          وفرت : {savedValue.toFixed(2)} جنيه
        </p>
      </div>
      {/* Phone Number */}
      <div className="flex justify-center mt-4">
        <Input
          name="phoneNumber"
          type="tel"
          className="w-1/2 text-center font-bold text-3xl tracking-wider"
          placeholder="رقم الهاتف"
        />
      </div>
    </div>
  );
};
