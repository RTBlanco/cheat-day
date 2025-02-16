import { Card, Typography, Slider } from "@material-tailwind/react";
import { useState } from "react";
 
const TABLE_HEAD = ["Days", "Calories"];
 

export default function Table({setTableRow, updateData, highCalPercentage, setHighCalPercentage, totalCal, setTotalCal, tableRows, calPerWeek, restDays }) {
  
  const handleChange = e => {
    updateData()
    console.log(Math.round(e.target.value) / 100 + 1)
    setHighCalPercentage(Math.round(e.target.value) / 100 + 1)

  }
  
  return (
    <section className="w-full">
      <div className="p-6">
        <Typography variant="lead" color="blue-gray" className="font-bold">
          ZigZag Dieting
        </Typography>
        <Typography className="mb-4 w-80 font-normal text-gray-600 md:w-full">
        Zigzag dieting, or calorie cycling, is a method where you alternate between high- and low-calorie days to keep metabolism active, prevent plateaus, and support weight management.
        By entering the amount of calories you wish consume in a week plus how many rest days you want, this will generate a simple caloric week plan that you can follow.By default the weekend are considerd cheatdays!
        </Typography>
        <Slider  onChange={handleChange} defaultValue={parseInt((highCalPercentage * 100) - 100)}/>
      </div>
      <Card className="h-full w-full border border-gray-300 px-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(tableRows).map((day, index) => {
              const isLast = index === Object.keys(tableRows).length - 1;
              const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {day}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {tableRows[day]}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t border-gray-300">
            <tr>
              <td className="p-4">
                <Typography
                  color="blue-gray"
                  variant="small"
                  className="font-bold"
                >
                  Total Calories
                </Typography>
              </td>
              <td>
                <Typography
                  color="blue-gray"
                  variant="small"
                  className="font-bold"
                >
                  {totalCal}
                </Typography>
              </td>
            </tr>
          </tfoot>
        </table>
      </Card>
    </section>
  );
}