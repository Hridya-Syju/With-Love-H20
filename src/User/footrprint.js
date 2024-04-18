import React, { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";

function WaterFpCalc() {
  // State variables to store user inputs
  const [directUsage, setDirectUsage] = useState({
    drinking: 0,
    bathing: 0,
    washingDishes: 0,
    cooking: 0,
    laundry: 0
  });

  const [indirectFoodConsumption, setIndirectFoodConsumption] = useState(0);
  const [indirectEnergyProduction, setIndirectEnergyProduction] = useState(0);

  // State variable to store the calculated total water footprint
  const [totalWaterFootprint, setTotalWaterFootprint] = useState(null);

  // Function to handle changes in direct water usage inputs
  const handleDirectUsageChange = (event) => {
    const { name, value } = event.target;
    // Check if value is not empty before parsing
    const parsedValue = value.trim() !== '' ? parseFloat(value) : 0;
    setDirectUsage(prevState => ({
      ...prevState,
      [name]: parsedValue
    }));
  };

  // Function to handle changes in indirect water usage for food consumption input
  const handleIndirectFoodConsumptionChange = (event) => {
    // Check if value is not empty before parsing
    const parsedValue = event.target.value.trim() !== '' ? parseFloat(event.target.value) : 0;
    setIndirectFoodConsumption(parsedValue);
  };

  // Function to handle changes in indirect water usage for energy production input
  const handleIndirectEnergyProductionChange = (event) => {
    // Check if value is not empty before parsing
    const parsedValue = event.target.value.trim() !== '' ? parseFloat(event.target.value) : 0;
    setIndirectEnergyProduction(parsedValue);
  };

  // Function to calculate the total water footprint
  const calculateTotalWaterFootprint = () => {
    const directWaterUsage = Object.values(directUsage).reduce((acc, curr) => acc + curr, 0);
    const totalWaterFootprint = directWaterUsage + indirectFoodConsumption + indirectEnergyProduction;
    setTotalWaterFootprint(totalWaterFootprint);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-10">Personal Water Footprint Calculator</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Direct Water Usage</h2>
        <div className="space-y-2">
          <Input color="black" value={directUsage.drinking} name="drinking" onChange={handleDirectUsageChange} label="Drinking (liters per day)" />
          <Input color="black" value={directUsage.bathing} name="bathing" onChange={handleDirectUsageChange} label="Bathing (liters per day)" />
          <Input color="black" value={directUsage.washingDishes} name="washingDishes" onChange={handleDirectUsageChange} label="Washing Dishes (liters per day)" />
          <Input color="black" value={directUsage.cooking} name="cooking" onChange={handleDirectUsageChange} label="Cooking (liters per day)" />
          <Input color="black" value={directUsage.laundry} name="laundry" onChange={handleDirectUsageChange} label="Laundry (liters per day)" />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Indirect Water Usage for Food Consumption </h2>
        <Input color="indigo" value={indirectFoodConsumption}  onChange={handleIndirectFoodConsumptionChange} label="liters per day." />
        <span> Click <a href="https://www.iberdrola.com/documents/20125/41026/Infographic_Water_Produce_Food.pdf/b1799b49-d87f-e9a9-f933-45cab9e58104?t=1628137775250">here</a> to calculate water for Food production.</span> 
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Indirect Water Usage for Energy Production </h2>
        <Input color="indigo" value={indirectEnergyProduction}  onChange={handleIndirectEnergyProductionChange} label="liters per day" />
        <span> Click <a href="https:">here</a> to calculate water for Food production.</span> 
      </div>
      <Button color="blue" onClick={calculateTotalWaterFootprint}>Calculate Total Water Footprint</Button>
      {totalWaterFootprint !== null && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Total Water Footprint (liters per day)</h2>
          <p>{totalWaterFootprint}</p>
          {totalWaterFootprint > 135 ? (
            <p className="font-bold text-red-500">Footprint over the optimal level</p>
          ) : (
            <p className="font-bold text-green-500">Footprint optimal</p>
          )}
          <h2 className="text-xl font-bold mb-2">Suggestions</h2>
          {directUsage.washingDishes > 11 && (
            <div className="mt-4">
              <p>Try to use a basin while washing dishes to minimize runoff.</p>
            </div>
          )}
          {directUsage.bathing > 30 && (
            <div className="mt-4">
              <p>Consider using a water-conserving showerhead or bathing using a bucket.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WaterFpCalc;
