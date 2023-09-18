import type { NextApiRequest, NextApiResponse } from "next";
import { getFilterForSelectedCity } from "services/SchoolService";

/**
 * @description - get seminars data against a specific user.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return seminars data against a specific user.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function SelectedCitFilter(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const data = await getFilterForSelectedCity(
                req.query.selectedCity as any
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

export default SelectedCitFilter;
