import { NextApiRequest, NextApiResponse } from "next";

import { getGateway } from "../../gateway/gateway";

let gateway: any = null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!gateway) {
    gateway = await getGateway();
  }
  gateway;
  return new Promise(async (resolve, reject) => {
    gateway.apolloServer.getMiddleware({ path: "/" })(
      req as any,
      res as any,
      (err: any) => {
        if (err) return reject(err);
        resolve(null);
      }
    );
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
