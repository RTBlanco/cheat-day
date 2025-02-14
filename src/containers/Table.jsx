import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Days", "Calories"];
 
const TABLE_ROWS = [
  {
    day: "Monday",
    cals: "1000",
  },

  {
    day: "Tuesday",
    cals: "1000",
  },

  {
    day: "Wednesday",
    cals: "1000",
  },

  {
    day: "Thursday",
    cals: "1000",
  },

  {
    day: "Friday",
    cals: "1000",
  },

  {
    day: "Saturday",
    cals: "1000",
  },

  {
    day: "Sunday",
    cals: "1000",
  },
];

export default function Table() {
  return (
    <section className="w-full">
      <div className="p-6">
        <Typography variant="lead" color="blue-gray" className="font-bold">
          Team members and roles
        </Typography>
        <Typography className="mb-4 w-80 font-normal text-gray-600 md:w-full">
          Overview of the key personnel involved in our project and their
          geographical distribution.
        </Typography>
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
            {TABLE_ROWS.map(({ day, cals }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";
 
              return (
                <tr key={day} className="hover:bg-gray-50">
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
                      {cals}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </section>
  );
}