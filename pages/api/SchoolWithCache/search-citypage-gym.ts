import type { NextApiRequest, NextApiResponse } from "next";
import { searchCityPageSelectedGym } from "services/SchoolService";

/**
 * @description - get seminars data against a specific user.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return seminars data against a specific user.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function SearchCityPageGym(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            const data = await searchCityPageSelectedGym(
                {
                    location: req.query.location as string,
                    neighborhood: req.query.neighborhood as string,
                    martialArts: req.query.martialArts as string,
                }
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

export default SearchCityPageGym;
