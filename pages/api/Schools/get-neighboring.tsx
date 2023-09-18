import type { NextApiRequest, NextApiResponse } from "next";
import {
  getNeighboringSchools,
} from "services/SchoolServiceWithoutCache";

/**
 * @description - get seminars data against a specific user.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return seminars data against a specific user.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function FilterHomePage(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const data = await getNeighboringSchools(
        req.query.lat as any,
        req.query.long as any
      );
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(504).json({ message: "Server Error" });
    }
  } else {
    // Handle any other HTTP method
  }
}

export default FilterHomePage;
